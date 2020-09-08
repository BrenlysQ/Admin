import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import VueNumeric from 'vue-numeric'
// import swal from 'sweetalert2';
const typeahead_route = 'affiliates/typeahead';
const credits_route = 'freelance/getFreelanceCredit';
const delete_credit = 'freelance/deletecredit';
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
            credits: [],
            infoLoaded: false
        }
    },
    created() {
        this.getCredits();
    },
    mounted() {

    },
    methods: {
        deleteCredit(credit, index) {
            swal({
                title: '¿Eliminar Crédito?',
                text: "¿Está seguro que desea eliminar este crédito?",
                type: 'warning',
                showCancelButton: true, 
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Eliminar',
                showLoaderOnConfirm: true,
            }).then((result) => {
                if (result.value) {
                    UltraApi.call(this, delete_credit, {id:credit.id}, function (self, response) {
                       if(response.body == 'success'){
                           swal.hideLoading();
                           swal(
                               'Éxito',
                               'El crédito ha sido eliminado correctamente.',
                               'success'
                           );
                           self.credits.splice(index, 1);
                       }else{
                           swal.hideLoading();
                           swal(
                               'Error',
                               'Ha ocurrido un error intentando eliminar el crédito. Intente nuevamente en unos minutos.',
                               'error'
                           );
                       }
                   });
                }
            });
            
        },
        getCustomer(index){
            if(this.credits[index].satellite.id == 84){
                return this.credits[index].freelance;
            }else{
                return this.credits[index].satellite;
            }
        },
        getCredits() {
            let query;
            if (this.parameters.customers.length == 0){
                query = {
                    id: null,
                    type: 'all'
                }
            }else{
                query = {
                    id: this.parameters.customers[0].id,
                    type: this.parameters.customers[0].type.toUpperCase()
                }
            }
            UltraApi.call(this, credits_route, query, function (self, response) {
                // console.log(response.body);
                self.credits = response.body;
                // dd( self.credits);
                self.infoLoaded = true;
            });
            
        },
        updateCustomersTags(new_customertag) {
            this.parameters.customers_autocomplete = [];
            this.parameters.customers = new_customertag;
        },
        formatOut(date) {
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
