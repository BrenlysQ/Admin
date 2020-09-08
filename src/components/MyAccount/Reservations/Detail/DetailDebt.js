// import Flight from '../Reservations/Flight/Flight.vue'
// import Hotel from '../Reservations//Hotel/Hotel.vue'
// import Security from '../Reservations//Security/Security.vue'
import Paymentslist from '../../Payments/List/PaymentsList.vue'
import FalseItinerary from './FalseItinerary.vue'
import moment from 'moment'
import VueNumeric from 'vue-numeric'
import printJS from 'print-js'
export default {
    name: '',
    components: {
      VueNumeric,
      FalseItinerary,
      Paymentslist
      // Hotel,
      // Security,
      // Paymentslist
    },
    props: {
        invoice:{}
    },
    data() {
        return {
            left_to_paid: 0,
            user_type: '',
            freelance_parent: 0,
            menu_iselected: -1,
            menu_selected: 0
        }
    },
    created: function () {
      console.log(this.invoice);
    },
    filters: {
        invoice_date: function (date) {
            var dat = moment(date);
            return dat.format('DD MMMM YYYY');
        },
        name_customer: function (pax) {
          if(pax){
            return pax.name + ' ' + pax.last_name;
          }else{
            return 'NA';
          }
        }
    },
    methods: {
      seller_info: function (invoice) {

      },
      viewFS () {
        console.log('mancha2');
        this.$refs['fullscreen'].toggle()
      },
      getInvoiceInfo: function(invoice, attribute){
          switch(attribute) {
              case 'currency':
                  return (invoice.currency == '4') ? '$' : 'BsF';
                  break;
              case 'separator':
                  return (invoice.currency == '4') ? ',' : '.';
                  break;
              case 'decimal':
                  return (invoice.currency == '4') ? '.' : ',';
                  break;
              // case :
              //     break;
          }
      },
      setMenu: function(index){
        this.menu_iselected = index;
      },
      toPrint(){
        printJS({
          printable : 'detailed_invoice',
          type: 'html',
          targetStyles: ['*'],
          ignoreElements:['export_controls']
        });
      },
      loadContent: function () {
            var _self = this;
            this.$http.post('/getitinajax?page=' + this.page).then(
                function (response) {

                },
                function (response) {
                    var error = (response.data.error) ? response.data.error : response.statusText;
                }
            );
        }
    }
}
