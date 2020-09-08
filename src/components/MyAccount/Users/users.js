import UltraApi from '../../UltraApi';
import VuePaginate from 'vue-paginate'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('users')
// import Datepicker from 'vuejs-datepicker';
import VueTagsInput from '@johmun/vue-tags-input';
import moment from 'moment';
const typeahead_route = 'affiliates/typeahead';
// import VueNumeric from 'vue-numeric'
import swal from 'sweetalert2';
const get_users_route = 'users';
const delete_route ='users/delete';
export default {
    components: {
        // Datepicker,
        VueTagsInput,
        // VueNumeric,
        VuePaginate
    },
    name: '',
    computed: mapState({
      state_users: state => state.users,
      usersLoaded: state => state.usersLoaded,
    }),
    data() {
        return {
            showAllUser: false,
            tag_user: '',
            debounce: null,
            parameters: {
                useers: [],
                user_autocomplete: []
            },
            infoLoaded:false,
            users: [],
            meta: {}
        }
    },
    created() {
        this.getUsers();
        this.getRoles();
    //this.getUseers();
    },
    mounted() {},
    methods: {
        ...mapMutations([
            'set_users',
        ]),
        getRoles(roles) {
            let response = [];
            if (Array.isArray(roles) && roles.length > 0) {
                roles.forEach(rol => {
                    if(rol){
                        response.push(rol.name);
                    }
                });
            }else{
                return 'Usuario';//must not be this way
            }
            return response;
        },
        getUsers() {
            if(this.usersLoaded)
            {
                this.users = this.state_users;
            }
            else
            {
                UltraApi.getCall(this, get_users_route, function (self, response) {
                    self.users = response.body.data;
                    self.meta = response.body.meta;
                    self.infoLoaded = true;
                  //  self.set_user(self.users);
                });
            }

        },
         /*getUseers() {
          let query;
            if (this.parameters.useers.length == 0){
                query = {
                    id: null,
                    type: 'all'
                }
            }else{
                query = {
                    id: this.parameters.useers[0].id,
                    type: this.parameters.useers[0].type.toUpperCase()
                }
            }
            UltraApi.call(this,  get_users_route, query, function (self, response) {
                // console.log(response.body);
                self.useers = response.body;
                // dd( self.credits);
                self.infoLoaded = true;
            });
            
        },*/
        deleteUser(user, index) {
            let vueins = this;
            // console.log(user);
            swal({  
                title: '¿Eliminar Usuario?',
                text: "¿Está seguro que desea eliminar este Usuario?",
                type: 'warning',
                showCancelButton: true, 
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Eliminar',
                showLoaderOnConfirm: true,
            }).then((result) => {
                if (result.value) {
                    //console.log("que bowen",user);
                    let query = {id: user.real_id};
                    UltraApi.call(vueins, delete_route, query, function (self, response) {
                       if(response.body.message.includes('Deleted Successfully')){
                           swal.hideLoading();
                           swal(
                               'Éxito',
                               'El Usuario ha sido eliminado correctamente.',
                               'success'
                           );
                           self.user.splice(index, 1);
                       }else{
                           swal.hideLoading();
                           swal(
                               'Error',
                               'Ha ocurrido un error intentando eliminar el Usuario. Intente nuevamente en unos minutos.',
                               'error'
                           );
                       }
                   });
                }
            });
            
        },
        formatOut(date) {
            
            return moment(date.date).locale('es').format('dddd DD MMMM, YYYY');
        },
        loadItems() {
            if (this.tag_user.length === 0) return;
            clearTimeout(this.debounce);
            this.debounce = setTimeout(() => {
                UltraApi.call(this, typeahead_route, {
                    query: this.tag_user
                }, function (self, response) {
                    self.parameters.users_autocomplete = response.body.map(a => {
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
         'tag_user': 'loadItems',
    },
}
