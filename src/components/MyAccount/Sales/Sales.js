//import IconEdit    from '@/components/UI/UIIcons/IconEdit.vue'
import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCNipa8nHKAi0GURYsw1UJWLbzrqqVDEUw",
    authDomain: "ultra-api-c7069.firebaseapp.com",
    databaseURL: "https://ultra-api-c7069.firebaseio.com",
    storageBucket: "ultra-api-c7069.appspot.com",
};
var firebaseApp = firebase.initializeApp(config);
var db = firebaseApp.database();
export default {

    name: '',
    data() {

        return {

            tableHead: [{

                    name: 'No.'

                },{

                    name: 'Cliente'

                },

                {

                    name: 'Creacion'

                },

                {

                    name: 'Pagado'

                },

                {

                    name: 'Por pagar'

                },

                {

                    name: 'Total'

                },

            ],

            inv_filters: {
              free_text : '',
              item_type: ''
            }

        }

    },
    firebase: function () {
      return {
        tableBody: db.ref('api_invoices')
      }
    },
    firebase: {
      invoices: db.ref('api_invoices')
    },
    mounted() {
      console.log(this.invoices);
      // console.log('MUSIU2');
      // console.log(this.$firebaseRefs.invoices);
    },
    firebase: {
      invoices: db.ref('api_invoices')
    },
    methods:{
      filters_applied: function(invoice){
        if(this.inv_filters.free_text != ''){
          var paxname = invoice.contact_pax.name + ' ' + invoice.contact_pax.last_name;
          var inName = paxname.search(new RegExp(this.inv_filters.free_text, 'i'));
          if( inName == -1 && !this.inItems(invoice.items)){
              // $('html, body').animate({scrollTop: 0}, 800);
              return false;
          }
        }
        if(this.inv_filters.item_type != '' && !this.hasType(invoice.items)){
          return false;
        }
        return true;
      },
      hasType: function(items){
        var self = this;
        var flag = false;
        items.forEach(function(item, key){
          if(item.invoice_type == self.inv_filters.item_type){
            flag = true;
            return
          }
        });
        return flag;
      },
      inItems: function(items){
        var self = this;
        var flag = 0;
        items.forEach(function(item, key){
          var invoiceable = item.invoiceable;
          if(item.invoice_type == 'ItinModel' && invoiceable.itinerary_id.search(new RegExp(self.inv_filters.free_text, 'i')) != -1){
            flag = 1;
          }else if(item.invoice_type == 'VoucherModel' && invoiceable.quotation_id.toString().search(new RegExp(self.inv_filters.free_text, 'i')) != -1){
            flag = 1;
          }else if(item.invoice_type == 'HotusaBooking' && invoiceable.booking_id.toString().search(new RegExp(self.inv_filters.free_text, 'i')) != -1){
            flag = 1;
          }else if(item.invoice_type == 'HotusaBooking' && invoiceable.option.hotel_name.search(new RegExp(self.inv_filters.free_text, 'i')) != -1){
            flag = 1;
          }
        });
        if(flag){
          return true;
        }
        return false;
      }
      //this.tableBody = this.$firebaseRefs.invoices;
        // var self = this;
        // console.log('hello');
        // // Initialize firebase realtime database.
        // firebase.database().ref('api_invoices/').on('value', function(snapshot) {
        //     // Everytime the Firebase data changes, update the todos array.
        //     console.log('hello');
        //     self.$set('tableBody', snapshot.val());
        // });
    },
}
