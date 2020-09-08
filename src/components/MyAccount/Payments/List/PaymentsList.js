import vueLoading from 'vue-loading-template'
import UltraApi from '../../../UltraApi'
import VueNumeric from 'vue-numeric'
import moment from 'moment'
export default {
    name: '',
    components: {
      vueLoading,
      VueNumeric
    },
    props: {
        invoice:{}
    },
    data() {
        return {
          payments: [],
          payments_loaded: false
        }
    },
    created: function () {
      this.init();
    },
    filters: {
      date_payment: function(date){
        var dat = moment(date);
        return dat.format('DD MMMM YYYY, hh:mm a');
      }
    },
    methods: {
      pay_status: function(st){
        if(st == 1){
          return '<i class="icon-time ui-color-secondary"></i> Esperando aprobación';
        }else if(st == 2){
          return '<i class="icon-ok ui-color-success"></i> Aprobado';
        }
      },
      getInvoiceInfo: function(currency, attribute){
          switch(attribute) {
              case 'currency':
                  return (currency == '4') ? '$' : 'BsF';
                  break;
              case 'separator':
                  return (currency == '4') ? ',' : '.';
                  break;
              case 'decimal':
                  return (currency == '4') ? '.' : ',';
                  break;
              // case :
              //     break;
          }
      },
      init: function(){
        var data = {id: this.invoice.id};
        //var _self = this;
        UltraApi.call(this,'creditpayments/getById',data,function(self,response){
          self.payments = response.body;
          self.payments_loaded = true;
        });
        // this.$http.post('/payments/list', data).then(
        //   function(response){
        //     if(response.body.length > 0){
        //       this.payments = response.body;
        //     }
        //   }
        // );
      }
    }
}
