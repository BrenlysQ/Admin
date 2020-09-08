import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import swal from 'sweetalert2';
import VueNumeric from 'vue-numeric'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('freelance')
const typeahead_route = 'affiliates/typeahead';
const list_route = 'freelance/getFreelance'
const currencies_route = 'currencies/list';
// const satelliteRegister = 'satellite/store';
const gds_route ='search_engine/list';
const delete_route = 'freelance/deleteFreelance'
export default {
    components: {
        Datepicker,
        VueTagsInput,
        VueNumeric,
    },
    name: '',
    computed: mapState({
      freelance: state => state.freelance,
      freelancesLoaded: state => state.freelancesLoaded,  
    }),
    data() {
        return {
            showAllUser: false,
            tag_sat: '',
            debounce: null,
            parameters: {
                sat: [],
                sat_autocomplete: []
            },
            freelances: [],
            infoLoaded: false
        }
    },
    created() {
        this.getfreelance();
        // this.getCurrencies();
      //  this.getSe();
    },
    mounted() {

    },
    methods: {
     ...mapMutations([
            'set_freelance',
        //     'set_currencies',
        //     'set_se',
         ]),
        getfreelance() {
             if (this.freelancesLoaded) {
                this.freelances = this.freelances;
                this.infoLoaded = true;
             }
             else
             {
                UltraApi.call(this, list_route,this.freelances,function (self, response) {
                    self.freelances = response.body;
                    self.infoLoaded = true;
                    // self.set_freelance(self.freelances);
                });
             }
            
        },
       
         deleteFree(freelance, index) {
            swal({  
                title: '¿Eliminar Freelance?',
                text: "¿Está seguro que desea eliminar este Freelance?",
                type: 'warning',
                showCancelButton: true, 
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Eliminar',
                showLoaderOnConfirm: true,
            }).then((result) => {
                if (result.value) {
                    let query = {id:freelance.id};
                    UltraApi.call(this,delete_route, query, function (self, response) {
                    // console.log(response)
                           // console.log(query);
                       if(response){
                           swal.hideLoading();
                           swal(
                               'Éxito',
                               'El Freelance ha sido eliminado correctamente.',
                               'success'
                           );
                           self.freelance.splice(index, 1);
                       }else{
                           swal.hideLoading();
                           swal(
                               'Error',
                               'Ha ocurrido un error intentando eliminar el Freelance. Intente nuevamente en unos minutos.',
                               'error'
                           );
                       }
                   });
                }
            });
            
        },
      
        formatOut(date) {
            return moment(date).format('dddd DD MMMM, YYYY');
        },
        // loadItems() {
        //     if (this.tag_sat.length === 0) return;
        //     clearTimeout(this.debounce);
        //     this.debounce = setTimeout(() => {
        //         UltraApi.call(this, typeahead_route, {
        //             query: this.tag_sat
        //         }, function (self, response) {
        //             self.parameters.sat_autocomplete = response.body.map(a => {
        //                 var sat = null;
        //                 if (a.affiliate_type == 'freelance') {
        //                     return {
        //                         text: a.affiliate_name + '(Freelance)',
        //                         id: a.id,
        //                         type: a.affiliate_type,
        //                         sat: a.id_satellite
        //                     };
        //                 } else if (a.affiliate_type == 'satellite') {
        //                     return {
        //                         text: a.owner.name + '(Satelite)',
        //                         id: a.id,
        //                         type: a.affiliate_type
        //                     };
        //                 }

        //             });
        //         });
        //     }, 600);
        // },
    },
    watch: {
        'tag_sat': 'loadItems',
    },
}