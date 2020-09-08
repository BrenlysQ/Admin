import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import Simplert from 'vue2-simplert';
import Multiselect from 'vue-multiselect';
import swal from 'sweetalert2';
const typeahead_route = 'affiliates/typeahead';
const currencies_route = 'currencies/list';
const satelliteRegister = 'satellite/store';
const gds_route ='search_engine/list';
//const create_credit = 'freelance/createcredit';
export default {
    components: {
        Datepicker,
        VueTagsInput,
        Simplert,
        Multiselect
    },
    name: '',
    data() {
        return {
            tag_customer: '',
            debounce: null,
            parameters: {
                customers: [],
                customers_autocomplete: [],
                week_days: moment.weekdays()
            },
            amount: '',
            type: 'amount',
            currencies: [],
            gds: [],
            //day_selected: 'next Monday'
           satellite:{
               name: '' ,
               domain: '',
               email_satellite: '',
               password: '' ,
               name_responsable: '',
               identification: '',
               email_responsable: '',
               address: '',
               telephone: '',
               currency_selected: null,
               search_engine: null,
          }
        }
    },
    created() {
        this.getCurrencies(); 
        this.getGds();
    },

    methods: {
        getCurrencies() {
            UltraApi.getCall(this, currencies_route, function (self, response) {
                self.currencies = response.body;
            });
        },
          getGds() {
            UltraApi.getCall(this, gds_route, function (self, response) {
                self.gds = response.body; 
            });
        },
        formatOut(date) {
            return moment(date).format('dddd DD MMMM, YYYY');
        },
        loadItems() {
            if (this.tag_customer.length === 0) return;
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                UltraApi.call(this, typeahead_route, {
                    query: this.tag_customer
                }, function (self, response) {
                    self.parameters.customers_autocomplete = response.body.map(a => {
                        var sat = null;
                        if (a.affiliate_type == 'freelance') {
                            return {
                                text: a.affiliate_name + '(Freelance)',
                                id: a.id,
                                type: a.affiliate_type,
                                sat: a.id_satellite
                            };
                        } else if (a.affiliate_type == 'satellite') {
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
        sendStuff() {
          var data = this.satellite;
          //console.log(data);
            UltraApi.call(this, satelliteRegister,data,function (self, response) {
              //console.log(response.body) ;
                   if(response.body == 'error'){
                    swal(
                        'Error',
                        'Ha ocurrido un error creando el Satelite. Verifique la información e intente nuevamente.',
                        'error'
                    );
                }else{
                    swal(
                        'Éxito',
                        'El Satelite ha sido creado satisfactoriamente.',
                        'success'
                    );
                    
                }
            });
        }
    },
    watch: {
        'tag_customer': 'loadItems',
    }
}

// import UltraApi from '../../UltraApi';
// import moment from 'moment';
// import $ from 'jquery'
// import validate from 'jquery-validation'
//const typeahead_route = 'affiliates/typeahead';
// const satelliteRegister = 'satellite/store';
// const currencies_route = 'currencies/list';



// export default {
//   components: {

//   },
//   name: '',
//   data() {
//     return {
       
//        satellite:{
//        dominio:'' ,
//        name:'',
//        clave:'',
//        propietario:'' ,
//        mail: '',
//        idP: '',
//        nameOwner:'',
//        tlf:'',
//        address:'',
//        moneda:'',
//        currencies: {},
//        currency_selected: {},
//        infoLoaded: false,
//        //  email:'',
//        // address: '',
//        // telephone: '',

//       // to:'',
//       // date:'',
//       // sentby:'',
//       // dateend:'',
//       // status:'',
//        }
//     }
//   },
//   created() {
//     console.log('satellite: ', this.satellite);
//     this.infoLoaded = false;
//     this.getCurrencies();
//   },

//   methods: {
//     // addFile: function(type = ''){
//     //   if(type == 'sum'){
//     //     this.files += 1;
//     //   }else if(this.files > 1){
//     //     this.files -= 1;
//     //   }
//     // },
//     // files_to_upload: function(id) {
//     //   console.log('Files: ', this.id);
//     // },
//     getCurrencies() {
//       UltraApi.getCall(this, currencies_route,  function (self, response) {
//         self.infoLoaded = true;
//         self.currencies = response.body;
//         self.currency_selected = response.body[0];
//       });
//     },
//     sendStuff: function () {
//       var form = $('#satellite-register-form');
//       let self = this;
//       form.validate({
//       rules: {
//         dominio:{
//         required: true
//         },
//         propietario: {
//         required: true
//         },
//         mail:{
//         required: true
//         },
//         idP: {
//         required: true
//         },
//        tlf:{

//         required:true
//         },
//         address:{

//         required:true
//         },
    
//       },
//       messages:{
//         dominio: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
//         propietario: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
//         mail: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
//         idP: '<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
//         tlf:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
//         adress:'<i class="fa fa-exclamation-triangle"></i>&nbsp;Este campo es requerido',
//       },
//       });
      
//      if (form.valid() ) {
//       UltraApi.call(this, SatelliteRegister, function (self, response) {
//           console.log(response.body) ;

//         });
//       }       
//      }
//   },
//   watch: {

//   }
// }
// //  // UltraApi.call(this, credits_route, query, function (self, response) {
// //  //                self.credits = response.body;
// //  //                self.infoLoaded = true;
// //  //            });
// //https://www.lawebdelprogramador.com/foros/PHP/1426876-Llenar-combobox-o-select-a-partir-de-otro.html
// //https://es.stackoverflow.com/questions/55761/rellenar-un-select-de-laravel-con-un-evento-change-de-otro-select
// //https://leonelomar.wordpress.com/2016/01/21/crear-select-dinamico-con-laravel-y-jquery/