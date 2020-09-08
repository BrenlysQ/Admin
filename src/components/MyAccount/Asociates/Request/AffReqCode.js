
import UltraApi from '../../../UltraApi'
import VueTagsInput from '@johmun/vue-tags-input';
const typeahead_route = 'affiliates/typeahead';
import vueLoading from 'vue-loading-template'
export default {
    components: {
        VueTagsInput,
        vueLoading
    },
    name: '',
    data() {

        return {
          tag_customer: '',
          debounce: null,
          parameters:{
            customers: [],
            customers_autocomplete: []
          },
          loading : false
        }

    },
    beforeCreate: function () {

    },
    mounted() {

    },
    methods:{

      updateCustomersTags(new_customertag){
        // this.parameters.customers_autocomplete = [];
        // this.parameters.customers = new_customertag;
      },
      loadItems() {
        if (this.tag_customer.length === 0) return;
        clearTimeout(this.debounce);
        this.debounce = setTimeout(() => {
          this.loading = true;
          UltraApi.call(this,typeahead_route,{query:this.tag_customer},function(self,response){
            self.parameters.customers_autocomplete = response.body.map(a => {
              var sat = null;
              if(a.affiliate_type == 'freelance'){
                return {
                  text: a.affiliate_name,
                  id: 'F' + a.id,
                  type: a.affiliate_type,
                  sat: a.id_satellite
                };
              }else if(a.affiliate_type == 'satellite'){
                return {
                  text: a.owner.name,
                  id: 'S' + a.id,
                  type: a.affiliate_type
                };
              }

            });
            self.loading = false;
          });
        }, 600);
      },
    },
    watch: {
    'tag_customer': 'loadItems',
    },
}
