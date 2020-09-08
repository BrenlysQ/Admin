
import UltraApi from '../../UltraApi';
import CollectionReport from './report/Report.vue';
import Datepicker from 'vuejs-datepicker';
import moment from 'moment';
import VueTagsInput from '@johmun/vue-tags-input';
const typeahead_route = 'affiliates/typeahead';
const getdebts_route = 'collection/getdebts';
export default {
    components: {
        Datepicker,
        VueTagsInput,
        CollectionReport
    },
    name: '',
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
          report_loaded : false,
          data_report: {},
          detailed : false
        }

    },
    beforeCreate: function () {

    },
    mounted() {

    },
    methods:{
      formatOut(date) {
          return moment(date).format('dddd DD MMMM, YYYY');
      },
      getReport(){
        UltraApi.call(this,getdebts_route,{customers: this.parameters.customers,detailed: this.detailed},function(self,response){
          self.data_report = response.body;
          self.report_loaded = true;
        });
      },
      updateCustomersTags(new_customertag){
        this.parameters.customers_autocomplete = [];
        this.parameters.customers = new_customertag;
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
