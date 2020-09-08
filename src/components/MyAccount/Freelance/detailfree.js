import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import Simplert from 'vue2-simplert';
import Multiselect from 'vue-multiselect';
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('freelance')
const typeahead_route = 'affiliates/typeahead';
const currencies_route = 'currencies/list';
// const satelliteRegister = 'satellite/store';
const gds_route ='search_engine/list';
const freelanceUpdate = 'freelance/updateFreelance';
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
        freelance: {},
    },
    computed: mapState({
      state_freelance: state => state.freelance,
      // se: state => state.se,
    }),
    data() {
        return {
            // tag_customer: '',
            // debounce: null,
            // parameters: {
            //     customers: [],
            //     customers_autocomplete: [],
            //     week_days: moment.weekdays()
            // },
            // amount: '',
            // type: 'amount',
           // currencies: [],
            //gds: [],
            //day_selected: 'next Monday'
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
        }
    },
    created() {
       // console.log(this.satelite);
    },
    mounted(){
        // this.getCurrencies(); 
        // this.getGds();
       this.getStateStuff(); 
       this.fillInfo();
    },

    methods: {

        fillInfo(){
         // console.log(this.satelite.name);
            this.freelance.name                = this.freelance.name
            this.freelance.lastname            = this.freelance.lastname 
            this.freelance.email               = this.freelance.email 
            this.freelance.phone               = this.freelance.phone  ;
            this.freelance.city                = this.freelance.city ;
            this.freelance.country             = this.freelance.country ;
           
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
         getStateStuff() {
            this.freelance = this.state_freelance;
            // this.gds = this.se;
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
        // sendStuff() {
        //   var data = this.satellite;
        //   console.log(data);
        //     UltraApi.call(this, satelliteRegister,data,function (self, response) {
        //       console.log(response.body) ;
        //     });
        //}
       sendStuff(){
            // console.log(this.satellite);
            UltraApi.call(this, freelanceUpdate, this.freelance, function (self, response) {
                self.currencies = response.body;
            });
        },
    },
    watch: {
        'tag_customer': 'loadItems',
    }
}