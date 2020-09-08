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

                    name: 'Fecha'

                },

                {

                    name: 'Satelite'

                },

                {

                    name: 'Moneda'

                },

                {

                    name: 'Cliente'

                },

                {

                    name: 'Monto'

                },

            ],

            inv_filters: {
              free_text : '',
              item_type: ''
            }

        }

    },
    // firebase: function () {
    //   return {
    //     tableBody: db.ref('api_invoices')
    //   }
    // },
    // firebase: {
    //   invoices: db.ref('api_invoices')
    // },
    mounted() {
      console.log(this.invoices);
      // console.log('MUSIU2');
      // console.log(this.$firebaseRefs.invoices);
    },
    filters:{
        currency: function (value) { 
            if (value == 3) {
                return 'Bolivares';
            } else {
                return 'Dolares';
            }
        }
    },
    firebase: {
      payments: db.ref('pup_payments')
    },
    methods:{
      
      
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
