import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import swal from 'sweetalert2';
import ChesterNumeric from '@/components/Helpers/ChesterNumeric/chester-numeric.vue';
const typeahead_route = 'affiliates/typeahead';
const currencies_route = 'currencies/list';
const create_credit = 'freelance/createcredit';
export default {
    components: {
        Datepicker,
        VueTagsInput,
        ChesterNumeric,
    },
    name: '',
    data() {
        return {
            tag_customer: '',
            debounce: null,
            parameters: {
                customers: [],
                customers_autocomplete: [],
                week_days: moment.weekdays()
            },
            amount: '',
            type: 'amount',
            currencies: {},
            currency_selected: {},
            day_selected: 'next Monday'
        }
    },
    created() {
        this.getCurrencies();
    },

    methods: {
        getCurrencies() {
            UltraApi.getCall(this, currencies_route, function (self, response) {
                self.currencies = response.body;
                self.currency_selected = response.body[0];
            });
        },
        newCredit() {
            let query, client = this.parameters.customers[0];
            if (client.type == 'satellite') {
                query = {
                    satellite: client.id,
                    freelance: null,
                    type: (this.type == 'amount') ? 2 : 1,
                    amount: this.amount,
                    currency: this.currency_selected.id,
                    due_day: (this.type == 'deadline') ? this.day_selected : ''
                }
            } else if (client.type == 'freelance') {
                query = {
                    satellite: 84,
                    freelance: client.id,
                    type: (this.type == 'amount') ? 2 : 1,
                    amount: this.amount,
                    currency: this.currency_selected.id,
                    due_day: (this.type == 'deadline') ? this.day_selected : ''
                }
            }
            console.log(query);
            
            UltraApi.call(this, create_credit, query, function(self, response){
                if(response.body == 'error'){
                    swal(
                        'Error',
                        'Ha ocurrido un error creando el crédito. Verifique la información e intente nuevamente.',
                        'error'
                    );
                }else{
                    swal(
                        'Éxito',
                        'El crédito ha sido creado satisfactoriamente.',
                        'success'
                    );
                    self.amount = '';
                    self.parameters.customers = [];
                }
            });
        },
        updateCustomersTags(new_customertag) {
            this.parameters.customers_autocomplete = [];
            this.parameters.customers = new_customertag;
        },
        formatOut(date) {
            return moment(date).format('dddd DD MMMM, YYYY');
        },
        loadItems() {
            if (this.tag_customer.length === 0) return;
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                UltraApi.call(this, typeahead_route, {
                    query: this.tag_customer
                }, function (self, response) {
                    self.parameters.customers_autocomplete = response.body.map(a => {
                        var sat = null;
                        if (a.affiliate_type == 'freelance') {
                            return {
                                text: a.affiliate_name + '(Freelance)',
                                id: a.id,
                                type: a.affiliate_type,
                                sat: a.id_satellite
                            };
                        } else if (a.affiliate_type == 'satellite') {
                            return {
                                text: a.owner.name + '(Satelite)',
                                id: a.id,
                                type: a.affiliate_type
                            };
                        }

                    });
                });
            }, 600);
        },
    },
    watch: {
        'tag_customer': 'loadItems',
    }
}
