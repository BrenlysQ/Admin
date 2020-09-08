import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import VueNumeric from 'vue-numeric'
import swal from 'sweetalert2';
const typeahead_route = 'affiliates/typeahead';
const get_transfers_route = 'bankstransfer/getalltransfers';
const update_transfers_route = 'bankstransfer/update';
// const delete_credit = 'freelance/deletecredit';
export default {
    components: {
        Datepicker,
        VueTagsInput,
        VueNumeric,
    },
    name: '',
    data() {
        return {
            tag_customer: '',
            debounce: null,
            parameters: {
                customers: [],
                customers_autocomplete: []
            },
            transfers: [],
            infoLoaded: false,
        }
    },
    created() {
        this.getTransfers();
    },
    mounted() {

    },
    computed: {

    },
    methods: {
        confirmTransfer(transfer, index){
            let query = {
                st: 1,
                idtransfer: transfer.id
            };
            UltraApi.call(this, update_transfers_route, query, function (self, response) {
                console.log(response.body);
                self.transfers[index].payment = response.body;
                if(response.body.st == 2){
                    swal(
                        'Éxito!',
                        'La transferencia ha sido confirmada.',
                        'success'
                    );
                }else{
                    swal(
                        'Error!',
                        'Ha ocurrido un error al procesar su solicitud, intente nuevamente.',
                        'error'
                    );
                }
            });
        },
        bounceTransfer(transfer, index) {
            let query = {
                st: 3,
                idtransfer: transfer.id
            };
            UltraApi.call(this, update_transfers_route, query, function (self, response) {
                console.log(response.body);
                self.transfers[index].payment = response.body;
                if(response.body.st == 3){
                    swal(
                        'Éxito!',
                        'La transferencia ha sido rechazada.',
                        'success'
                    );
                }else{
                    swal(
                        'Error!',
                        'Ha ocurrido un error al procesar su solicitud, intente nuevamente.',
                        'error'
                    );
                }
            });
        },
        getCustomer(index) {
            if (this.credits[index].satellite.id == 84) {
                return this.credits[index].freelance;
            } else {
                return this.credits[index].satellite;
            }
        },
        getTransfers() {
            let query;
            UltraApi.call(this, get_transfers_route, query, function (self, response) {
                console.log(response.body);
                self.transfers = response.body;
                self.infoLoaded = true;
            });

        },
        updateCustomersTags(new_customertag) {
            this.parameters.customers_autocomplete = [];
            this.parameters.customers = new_customertag;
        },
        getClientName(invoice) {
            console.log(invoice);
            let client = '';
            if(invoice.freelance != null){
                client = invoice.freelance.name + ' ' + invoice.freelance.lastname;
            }else{
                client = invoice.satellite.owner.name;
            }
            
            return client;
        },
        formatOut(date) {
            console.log(date);
            return moment(date).locale('es').format('dddd DD MMMM, YYYY');
        },
        loadItems() {
            if (this.tag_customer.length === 0) return;
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                UltraApi.call(this, typeahead_route, {
                    query: this.tag_customer
                }, function (self, response) {
                    self.parameters.customers_autocomplete = response.body.map(a => {
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
    },
}
