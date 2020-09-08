
import UltraApi from '../../UltraApi'
import moment from 'moment'
import vueLoading from 'vue-loading-template'
import VueNumeric from 'vue-numeric'

const parse_route = 'affiliates/parsefile';
const senddata_route = 'affiliates/savefile';
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
          detail_view : ''
        }

    },
    beforeCreate: function () {

    },
    mounted() {

    },
    methods:{
      view_detail(view){
        if(this.detail_view == view){
          this.detail_view = '';
        }else{
          this.detail_view = view;
        }

      },
      loadItems() {
        this.loading_info = true;
        this.detail_view = '';
        var file = this.$refs.data_file.files[0];
        let formData = new FormData();
        formData.append('data_file', file);
        UltraApi.call(this,parse_route,formData,
          function(_self,response){
            _self.file_data = response.body;
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
        UltraApi.call(this,senddata_route,data,
          function(self,response){
            console.log('Hello');
          }
        );
      }
    },
    watch: {

    },
}
