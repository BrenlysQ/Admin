import moment from 'moment'
import VueNumeric from 'vue-numeric'
//npm install print-js --save
import printJS from 'print-js'
import fullscreen from 'vue-fullscreen'
import Vue from 'vue'
Vue.use(fullscreen)
export default {
    name: '',
    props:{
      dataReport:{},
    },
    components: {
      VueNumeric
    },
    computed: {
      // a computed getter
      today: function () {
        // `this` points to the vm instance

        return moment().format("dddd, DD MMMM YYYY, h:mm:ss a");
      },
      userloged: function(){
        var user = JSON.parse(localStorage.getItem('user_info'))
        return user.data.name;
      }
    },
    beforeCreate: function () {

    },

    mounted() {
      console.log(localStorage.getItem('user_info'));
    },
    methods:{
      toPrint(){
        printJS({
          printable : 'debts_report',
          type: 'html',
          targetStyles: ['*'],
          ignoreElements:['export_controls']
        });
      },
      viewFS () {
        console.log('mancha2');
        this.$refs['fullscreen'].toggle()
      }
    },
}
