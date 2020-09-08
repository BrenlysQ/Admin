import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import swal from 'sweetalert2';
import ChesterNumeric from '@/components/Helpers/ChesterNumeric/chester-numeric.vue';
const typeahead_route = 'affiliates/typeahead';
const currencies_route = 'currencies/list';
const update_credit = 'freelance/updatecredit';
export default {
    components: {
        Datepicker,
        VueTagsInput,
        ChesterNumeric,
    },
    name: '',
    props: {
        credit: {},
        customer: {}
    },
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
            day_selected: 'next Monday',
            name_to_show: ''
        }
    },
    created() {
        this.getCurrencies();
        // console.log(this.customer);
        if (this.customer.id_satellite == 84) {
            this.name_to_show = this.customer.name + ' ' + this.customer.lastname;
        }else{
            this.name_to_show = this.customer.owner.name;
        }
        this.amount = this.credit.total_amount;
        this.type = (this.credit.credit_type_id == 2) ? 'amount' : 'deadline';

    },

    methods: {
        getCurrencies() {
            UltraApi.getCall(this, currencies_route, function (self, response) {
                response.body.forEach(currency => {
                    self.currencies = response.body;
                    if (currency.id == self.credit.currency.id) {
                        self.currency_selected = currency;
                    }
                });
            });
        },
        updateCredit() {
            let query = {
                id: this.credit.id,
                type: (this.type == 'amount') ? 2 : 1,
                amount: this.amount,
                currency: this.currency_selected.id,
                due_day: (this.type == 'deadline') ? this.day_selected : ''
            }
            // console.log(query);
            UltraApi.call(this, update_credit, query, function (self, response) {
                console.log(response.body);
                if (response.body.success == true) {
                    swal(
                        'Éxito',
                        'El crédito ha sido modificado satisfactoriamente.',
                        'success'
                    );
                } else {
                    swal(
                        'Error',
                        'Ha ocurrido un error modificando el crédito. Verifique la información e intente nuevamente.',
                        'error'
                    );
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