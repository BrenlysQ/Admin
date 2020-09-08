
import UltraApi from '../../../UltraApi'
import moment from 'moment'
import vueLoading from 'vue-loading-template'
import VueNumeric from 'vue-numeric'
const getdata_route = 'collection/parsefile';
const senddata_route = 'collection/savedebtfile';
export default {
  components:{
    vueLoading,
    VueNumeric
  },
    name: '',
    data() {

        return {
          loading_info: false,
          first_load : true,
          file_data:{},
          detailed:false,
          details_view : '',
          selected_currency: 3
        }

    },
    beforeCreate: function () {

    },
    mounted() {

    },
    methods:{
      sortDesc(a,b) {
          if (a.total < b.total)
              return 1;
          if (a.total > b.total)
              return -1;
              return 0;
      },
      loadItems() {
        this.loading_info = true;
        this.details_view = '';
        var file = this.$refs.data_file.files[0];
        let formData = new FormData();
        formData.append('data_file', file);
        formData.append('detailed',this.detailed);
        formData.append('selected_currency',this.selected_currency);
        UltraApi.call(this,getdata_route,formData,
          function(_self,response){
            //var customers = response.body.customers
            _self.file_data = response.body;
            _self.file_data.customers.sort(_self.sortDesc);
            _self.loading_info = false;
            _self.first_load = false;
          }
        );
      },
      send_items(){
        var data = {
          details: [],
          identifier: this.file_data.identifier
        };
        this.loading_info = true;
        this.details_view = '';
        UltraApi.call(this,senddata_route,data,
          function(self,response){
            self.loading_info = false;
            alert('Enviado');
          }
        );
      }
    },
    watch: {

    },
}
