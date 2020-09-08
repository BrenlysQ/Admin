import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import Simplert from 'vue2-simplert';
import Multiselect from 'vue-multiselect';
import swal from 'sweetalert2';
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('user')
const typeahead_route = 'affiliates/typeahead';
const currencies_route = 'currencies/list';
const get_role = 'User/GetRols'; 
// const satelliteRegister = 'satellite/store';
// const gds_route ='search_engine/list';
const updateUser = 'User/Update';

//const create_credit = 'freelance/createcredit';
export default {
    components: {
        Datepicker,
        VueTagsInput,
        Simplert,
        Multiselect
    },
    name: '',
    props: {
        usuario: {},
    },
    // computed: mapState({
    //   state_currencies: state => state.currencies,
    //   se: state => state.se,
    // }),
    data() {
        return {
            tag_customer: '',
            debounce: null,
            parameters: {
            customers: [],
            customers_autocomplete: [],
            },
            roles: Array,
            rolesLoaded: false,
            user:{
                id:'',
                name: '' ,
                email: '',
                password: '' ,
                rol: '',
                gender: '',
                birth: moment().subtract(18, 'years').toDate(),
            },
            disabled: {
                from: moment().subtract(18, 'years').toDate(),
                to: moment().subtract(100, 'years').toDate(),
            }
            // satellite:{
            //    id:'',
            //    name: '' ,
            //    domain: '',
            //    email_satellite: '',
            //    password: '' ,
            //    name_responsable: '',
            //    identification: '',
            //    email_responsable: '',
            //    address: '',
            //    telephone: '',
            //    currency_selected: [],
            //    search_engine: [],
            // }
        }
    },
    created() {
        console.log(this.usuario);
    },
    mounted(){
        this.fillInfo();
        this.get_role();
    },

    methods: {
        get_role()
        {
            var data = '';
            UltraApi.call(this,get_role,data,function (self, response) {
                console.log(response);
                self.roles = response.body;
                self.rolesLoaded = true;
            });
        },
       fillInfo(){

                this.user.id        = this.usuario.real_id;
                this.user.name      = this.usuario.name;
                this.user.email     = this.usuario.email;
                this.user.password  = '';
                this.user.rol       = this.usuario.roles20;
                this.user.gender    = '';
                this.user.birth     = '';
            },
        // getStateStuff() {
        //     this.currencies = this.state_currencies;
        //     this.gds = this.se;
        // },
        // // formatOut(date) {
        //     return moment(date).format('dddd DD MMMM, YYYY');
        // },
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
       sendStuff(){
            console.log(this.user);
          // let query = {id: this.user};
            UltraApi.call(this, updateUser, this.user, function (self, response) {
                // self.currencies = response.body;
                    if(response.body == 'error'){
                    swal(
                        'Error',
                        'Ha ocurrido un error creando el Usuario. Verifique la información e intente nuevamente.',
                        'error'
                    );
                }else{
                    swal(
                        'Éxito',
                        'El Usuario ha sido actualizado satisfactoriamente.',
                        'success'
                    );
                    
                }
            });
        },
    },
    watch: {
        'tag_customer': 'loadItems'
    }
}