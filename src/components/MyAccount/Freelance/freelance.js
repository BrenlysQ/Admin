import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import Simplert from 'vue2-simplert';
import Multiselect from 'vue-multiselect';
import swal from 'sweetalert2';
const typeahead_route = 'affiliates/typeahead';
const register_route = 'freelance/addFreelance';
// const get_role = 'User/GetRols'; 
// const satelliteRegister = 'satellite/store';
// const gds_route ='search_engine/list';
//const create_credit = 'freelance/createcredit';
export default {
    components: {
        Datepicker,
        VueTagsInput,
        Simplert,
        Multiselect
    },
    name: '',
    data() {
        return {
            tag_customer: '',
            debounce: null,
            parameters: {
                customers: [],
                customers_autocomplete: [],
            },
            // roles: [],
            // rolesLoaded: false,
            freelance:{
                id:'',
                exp_years: 0,
                places:'[{"places":"place"}]',
                sales: 0,
                languages:'[{"language":"ES"}]',
                skills: '[{"skill":"Skill"}]',
                ranking_plus: 2,
                ranking: 0,
                satellite:'',
                name: '' ,
                lastname: '',
                email: '' ,
                phone: '' ,
                gender:'',
                team:'1',
                city: '' ,
                country: '' ,
                accountid:'',
                identification:'',
                account_number:'0',
                code:'',
                bank_name:'',
                accounttype:'',
            },
            disabled: {
                from: moment().subtract(18, 'years').toDate(),
                to: moment().subtract(100, 'years').toDate(),
            }
        }
    },
    created() {
        // this.get_role();
    },
    methods: {
        // get_role()
        // {
        //     var data = '';
        //     UltraApi.call(this,get_role,data,function (self, response) {
        //         console.log(response);
        //         self.roles = response.body;
        //         self.rolesLoaded = true;
        //     });
        // },
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
        sendStuff() {
           var data = this.freelance;
          // console.log(this.id_satellite);
            UltraApi.call(this,register_route,data,function (self, response) {

                if(response.body == 'error'){
                    swal(
                        'Error',
                        'Ha ocurrido un error creando el Freelance. Verifique la información e intente nuevamente.',
                        'error'
                    );
                }else{
                    swal(
                        'Éxito',
                        'El Freelance ha sido creado satisfactoriamente.',
                        'success'
                    );
                    
                }
            });
        }
    },
    watch: {
        'tag_customer': 'loadItems',
    }
}
