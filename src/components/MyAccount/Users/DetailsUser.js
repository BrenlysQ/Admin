import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import Simplert from 'vue2-simplert';
import Multiselect from 'vue-multiselect';
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('user')
const typeahead_route = 'affiliates/typeahead';
const get_users_route = 'users';
const get_role = 'User/GetRols'; 
// const currencies_route = 'currencies/list';
// const satelliteRegister = 'satellite/store';
// const gds_route ='search_engine/list';
// const satelliteUpdate = 'satellite/update';
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
            roles: [],
            rolesLoaded: false,
            user:{
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
        }
    },
    created() {},
    mounted(){
       this.fillInfo();
    },

    methods: {

        fillInfo(){
            this.user.name      = this.usuario.name;
            this.user.email     = this.usuario.email;
            this.user.password  = '';
            this.user.rol       = this.usuario.roles20;
            this.user.gender    = this.usuario.gender;
            this.user.birth     = this.usuario.birth;
            
        },
        // getCurrencies() {
        //     UltraApi.getCall(this, currencies_route, function (self, response) {
        //         self.currencies = response.body;
        //     });
        // },
        //   getGds() {
        //     UltraApi.getCall(this, gds_route, function (self, response) {
        //         self.gds = response.body; 
        //     });
        // },
        // formatOut(date) {
        //     return moment(date).format('dddd DD MMMM, YYYY');
        // },
        //  getStateStuff() {
        //     this.currencies = this.state_currencies;
        //     this.gds = this.se;
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
        // sendStuff() {
        //   var data = this.satellite;
        //   console.log(data);
        //     UltraApi.call(this, satelliteRegister,data,function (self, response) {
        //       console.log(response.body) ;
        //     });
        //}
    //    sendStuff(){
    //         // console.log(this.satellite);
    //         UltraApi.call(this, satelliteUpdate, this.satellite, function (self, response) {
    //             self.currencies = response.body;
    //         });
    //     },
    },
    watch: {
        'tag_customer': 'loadItems',
    }
}