
import { createNamespacedHelpers } from 'vuex'
import UltraApi from '../../UltraApi'
import swal from 'sweetalert2';
const { mapState, mapMutations } = createNamespacedHelpers('login')
// const get_role = 'User/GetRols'; 
// const get_users_route = 'users';
// import firebase from 'firebase'
// var config = {
//     apiKey: "AIzaSyCNipa8nHKAi0GURYsw1UJWLbzrqqVDEUw",
//     authDomain: "ultra-api-c7069.firebaseapp.com",
//     databaseURL: "https://ultra-api-c7069.firebaseio.com",
//     storageBucket: "ultra-api-c7069.appspot.com",
// };
// var firebaseApp = firebase.initializeApp(config);
// var db = firebaseApp.database();
export default {

    name: '',
    //   computed: mapState({
    //   state_rol: state => state.roles,
    // }),
    data() {

        return {
            password : '',
            email: '',
            roles: [],
            infoLoaded:false,
        }

    },
    beforeCreate: function () {
  		//this.$http.headers.common['Accept'] = 'application/json';
      if (this.$session.has('apitoken')) {
        this.$router.push('/');
      }
    },
    
    created() {},

    mounted() {},

    methods:{
       // ...mapMutations([
       //      'state_rol',
       //  ]),
      mklogin: function(){
        this.infoLoaded=true
        var credentials = {
          username: this.email,
          password: this.password
        }
      //  console.log(this.credentials);
        UltraApi.login(this, credentials, function (self, response) {
          if('access_token' in response.body){
            var token = response.body.access_token;
            localStorage.setItem('api_token', token);
            UltraApi.user.authenticated = true;
            UltraApi.getUserInfo(self);
           // self.infoLoaded = true;
            swal('Éxito',
              'Ha iniciado sesión correctamente',
              'success')
          }
        },
        function(error){
          swal(
              'Error',
              'No ha podido iniciar sesión, verifique sus datos e intente nuevamente.',
              'error'
            )
        })
         // this.infoLoaded=false
      }
    },
 }
