import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import Simplert from 'vue2-simplert';
import Multiselect from 'vue-multiselect';
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('satellite')
const typeahead_route = 'affiliates/typeahead';
const currencies_route = 'currencies/list';
// const satelliteRegister = 'satellite/store';
const gds_route ='search_engine/list';
const satelliteUpdate = 'satellite/update';
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
        satelite: {},
    },
    computed: mapState({
      state_currencies: state => state.currencies,
      se: state => state.se,
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
            currencies: [],
            gds: [],
            //day_selected: 'next Monday'
           satellite:{
               id:'',
               name: '' ,
               domain: '',
               email_satellite: '',
               password: '' ,
               name_responsable: '',
               identification: '',
               email_responsable: '',
               address: '',
               telephone: '',
               currency_selected: [],
               search_engine: [],
            }
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
            this.satellite.id                = this.satelite.id;
            this.satellite.domain            = this.satelite.domain;
            this.satellite.name              = this.satelite.user.name;
            this.satellite.email_satellite   = this.satelite.user.email;
            this.satellite.name_responsable  = this.satelite.owner.name;
            this.satellite.identification    = this.satelite.owner.identification;
            this.satellite.address           = this.satelite.owner.address;
            this.satellite.telephone         = this.satelite.owner.telephone;
            this.satellite.email_responsable = this.satelite.owner.email;
            this.satellite.currency_selected = this.satelite.currencies ;
            this.satellite.search_engine     = this.satelite.search_engines;
            this.satellite.password          = '';
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
            this.currencies = this.state_currencies;
            this.gds = this.se;
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
            UltraApi.call(this, satelliteUpdate, this.satellite, function (self, response) {
                self.currencies = response.body;
            });
        },
    },
    watch: {
        'tag_customer': 'loadItems',
    }
}