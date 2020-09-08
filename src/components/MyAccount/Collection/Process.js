
import UltraApi from '../../UltraApi'
import ToProcess from './Process/ToProcess.vue'
import Datepicker from 'vuejs-datepicker'
import moment from 'moment'
import VueTagsInput from '@johmun/vue-tags-input';
import vueLoading from 'vue-loading-template'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('collection')
const typeahead_route = 'affiliates/typeahead';
const getdebts_route = 'collection/toprocess';
export default {
    components: {
        Datepicker,
        VueTagsInput,
        ToProcess,
        vueLoading
    },
    name: '',
    computed: mapState({
      customer: state => state.customer,
      data_loaded: state => state.data_loaded,
      data_debt: state => state.data_debt,
    }),
    data() {

        return {
          tag_customer: '',
          debounce: null,
          parameters:{
            date_start : moment().startOf('month').toDate(),
            date_end: moment().toDate(),
            customers: [],
            customers_autocomplete: []
          },
          // data_loaded : false,
          // data_debt: {},
          detailed : false,
          loading_info: false,
          tktToFind: ''
        }

    },
    beforeCreate: function () {

    },
    mounted() {
      //console.log(this.valorcito);
    },
    methods:{
      ...mapMutations([
        'set_customer',
        'loaded_debts'
      ]),
      formatOut(date) {
          return moment(date).format('dddd DD MMMM, YYYY');
      },
      getDebt(){
        this.loading_info = true
        var parameters = {
          tkt_number: this.tktToFind,
          customer: this.customer[0]
        };
        UltraApi.call(this,getdebts_route,parameters,function(self,response){
          //self.$store.commit('collection/loaded_debts', response.body)
          self.loaded_debts(response.body);
          self.loading_info = false;
        });
      },
      updateCustomersTags(new_customertag){
        this.parameters.customers_autocomplete = [];
        this.parameters.customers = new_customertag;
        this.set_customer(new_customertag)
        //this.$store.collection.commit('set_customer', new_customertag);
      },
      loadItems() {
        if (this.tag_customer.length === 0) return;
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          UltraApi.call(this,typeahead_route,{query:this.tag_customer},function(self,response){
            self.parameters.customers_autocomplete = response.body.map(a => {
              var sat = null;
              if(a.affiliate_type == 'freelance'){
                return {
                  text: a.affiliate_name  + '(Freelance)',
                  id: a.id,
                  type: a.affiliate_type,
                  sat: a.id_satellite
                };
              }else if(a.affiliate_type == 'satellite'){
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
