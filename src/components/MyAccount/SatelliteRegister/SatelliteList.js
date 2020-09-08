import UltraApi from '../../UltraApi';
import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
import swal from 'sweetalert2';
import VueNumeric from 'vue-numeric'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('satellite')
const typeahead_route = 'affiliates/typeahead';
const list_route = 'satellite/list'
const currencies_route = 'currencies/list';
// const satelliteRegister = 'satellite/store';
const gds_route ='search_engine/list';
const delete_route = 'satellite/delete'
export default {
    components: {
        Datepicker,
        VueTagsInput,
        VueNumeric,
    },
    name: '',
    computed: mapState({
      satellites: state => state.satellites,
      satellitesLoaded: state => state.satellitesLoaded,
      currencies: state => state.currencies,
      se: state => state.se,
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
            satelites: [],
            infoLoaded: false
        }
    },
    created() {
        this.getSatellites();
        this.getCurrencies();
        this.getSe();
    },
    mounted() {

    },
    methods: {
        ...mapMutations([
            'set_satellites',
            'set_currencies',
            'set_se',
        ]),
        getSatellites() {
            if (this.satellitesLoaded) {
                this.satelites = this.satellites;
                this.infoLoaded = true;
            }
            else
            {
                UltraApi.getCall(this, list_route, function (self, response) {
                    self.satelites = response.body;
                    self.infoLoaded = true;
                    self.set_satellites(self.satelites);
                });
            }
            
        },
        getCurrencies() {
            // console.log('Load: ',this.currenciesLoaded);
            // console.log('Sat: ',this.currencies);
            if (this.currenciesLoaded) {
                 this.infoLoaded = true;
            }
            else
            {
                UltraApi.getCall(this,currencies_route, function (self, response) {
                    self.infoLoaded = true;
                    self.set_currencies(response.body);
                });  
            }
            
        },
        getSe() {
            // console.log('Load: ',this.seLoaded);
            if (this.seLoaded) {
                this.infoLoaded = true;
            }
            else
            {
                UltraApi.getCall(this, gds_route, function (self, response) {
                    self.infoLoaded = true;
                    self.set_se(response.body);
                });  
            }
        },
       
         deleteSat(satellite, index) {
            swal({  
                title: '¿Eliminar Satélite?',
                text: "¿Está seguro que desea eliminar este satélite?",
                type: 'warning',
                showCancelButton: true, 
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Eliminar',
                showLoaderOnConfirm: true,
            }).then((result) => {
                if (result.value) {
                    UltraApi.call(this, delete_route, {id:satellite.id}, function (self, response) {
                        // console.log(response)
                       if(response.body.status == 'success'){
                           swal.hideLoading();
                           swal(
                               'Éxito',
                               'El satélite ha sido eliminado correctamente.',
                               'success'
                           );
                           self.satelites.splice(index, 1);
                       }else{
                           swal.hideLoading();
                           swal(
                               'Error',
                               'Ha ocurrido un error intentando eliminar el satélite. Intente nuevamente en unos minutos.',
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
        loadItems() {
            if (this.tag_sat.length === 0) return;
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                UltraApi.call(this, typeahead_route, {
                    query: this.tag_sat
                }, function (self, response) {
                    self.parameters.sat_autocomplete = response.body.map(a => {
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
    },
    watch: {
        'tag_sat': 'loadItems',
    },
}