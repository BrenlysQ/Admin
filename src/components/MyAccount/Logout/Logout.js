
import UltraApi from '../../UltraApi'
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapMutations } = createNamespacedHelpers('login')

export default {

    name: '',
    //   computed: mapState({
    //   state_rol: state => state.roles,
    // }),
    data() {

        // return {
        //     password : '',
        //     email: '',
        //     roles: [],
        // }

    },
    beforeCreate: function () {
  		this.$http.headers.common['Accept'] = 'application/json';
      if (this.$session.has('apitoken')) {
        this.$router.push('/');
      }
    },
    
   created() {
        // this.getUsers();
        // this.getRoles();
         UltraApi.logout(this);
   },

    mounted() {
      //console.log(this.invoices);
      // console.log('MUSIU2');
      // console.log(this.$firebaseRefs.invoices);
    },

    methods:{
      //  ...mapMutations([
      //       'state_rol',
      //   ]),
      // mklogin: function(){
      //   var credentials = {
      //     username: this.email,
      //     password: this.password
      //   }
      //   var _self = this;
      //   console.log(this.credentials);
    
      }
    }
// }
