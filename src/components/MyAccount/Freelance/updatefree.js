import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import Simplert from 'vue2-simplert';
import Multiselect from 'vue-multiselect';
import swal from 'sweetalert2';
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('freelance')
const typeahead_route = 'affiliates/typeahead';
const currencies_route = 'currencies/list';
// const satelliteRegister = 'satellite/store';
const gds_route ='search_engine/list';
const freelanceUpdate = 'freelance/updateFreelance';
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
         freelance:{},
    },
    computed: mapState({
      state_freelances: state => state.freelance,
     // se: state => state.se,
    }),
    data() {
        return {
            // currencies: [],
            // gds: [],
            // aux: [],
     freeelance:{
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
        }
    },
    created() {},
    mounted(){
        this.getStateStuff(); 
        this.fillInfo();
    },

    methods: {
        fillInfo(){
            console.log(this.freelance);
            this.freeelance.id                = this.freelance.id;
            this.freeelance.name              = this.freelance.name;
            this.freeelance.lastname          = this.freelance.lastname;
            this.freeelance.phone             = this.freelance.phone;
            this.freeelance.email             = this.freelance.email;
            this.freeelance.city              = this.freelance.city;
            this.freeelance.country           = this.freelance.country;
            this.freeelance.gender            = this.freelance.gender;
            this.freeelance.exp_years         = this.freelance.exp_years;
            this.freeelance.places            = this.freelance.places;
            this.freeelance.sales             = this.freelance.sales;
            this.freeelance.languages         = this.freelance.languages;
            this.freeelance.team              = this.freelance.team;
            this.freeelance.accountid         = this.freelance.accountid;
            this.freeelance.identification    = this.freelance.identification;
            this.freeelance.account_number    = this.freelance.account_number;
            this.freeelance.code              = this.freelance.code;
            this.freeelance.bank_name         = this.freelance.identification;
            this.freeelance.accounttype       = this.freelance.accounttype;
        },
        getStateStuff() {
            this.freelance = this.state_freelances;
        },
        // formatOut(date) {
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
            UltraApi.call(this, freelanceUpdate, this.freelance, function (self, response) {
                self.currencies = response.body;
                     if(response.body == 'error'){
                    swal(
                        'Error',
                        'Ha ocurrido un error actualizando el Freelance. Verifique la información e intente nuevamente.',
                        'error'
                    );
                }else{
                    swal(
                        'Éxito',
                        'El Freelance ha sido actualizado satisfactoriamente.',
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