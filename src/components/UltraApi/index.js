const API_URL = 'http://pool2.viajesplusultra.com/v1/';
//const API_URL = 'http://killroy.plusultra-desarrollo.com.ve/v1/';
const LOGIN_ROUTE = API_URL + 'oauth/token';
const USERINFO_ROUTE = API_URL + 'userinfomenu';
export default{
  user: {
    authenticated: false
  },
  getUserInfo(context){
    context.$http.get(USERINFO_ROUTE,{
      headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('api_token')
      }
    }).then(
      function(response){
        localStorage.setItem('user_info', JSON.stringify(response.body));
        context.$router.push('/')
      },function(){

      }
    );
  },
  login(context, credentials, success, error){
    var data = {
      username: credentials.username,
      password: credentials.password,
      client_id: 11,
      client_secret: '6kEl4Alj9LhQ6wNb8mYPqDTpBpop0G36fRkiizrp',
      grant_type: 'password'
    }
    // var _self = this;
    context.$http.post(LOGIN_ROUTE, data).then(
      function(response){
        success(context, response)
      },
      function(err){
        error(err)
      }
    );
  },
  call(context, route, data, success, error){
    //TODO: VALIDAR SI NO ESTA LOGUEADO LO ENIO AL METODO DE UNATHENTICATED
    var url = API_URL + route;
    //localStorage.getItem('api_token')
    context.$http.post(url, data,{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('api_token')
      }
    }).then(
      function(response){
        success(context,response);
      },function(err){
        //TODO: VALIDAR SI EL TOKEN NO ES VALIDO LO ENIO AL METODO DE UNATHENTICATED
        error(err);
      }
    );
  },
  getCall(context, route, success, error) {
    //TODO: VALIDAR SI NO ESTA LOGUEADO LO ENIO AL METODO DE UNATHENTICATED
    var url = API_URL + route;
    //localStorage.getItem('api_token')
    context.$http.get(url, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('api_token')
      }
    }).then(
      function (response) {
        success(context, response);
      },
      function (err) {
        //TODO: VALIDAR SI EL TOKEN NO ES VALIDO LO ENIO AL METODO DE UNATHENTICATED
        error(err);
      }
    );
  },
  logout(context){
    localStorage.removeItem('api_token');
    this.user.authenticated = false;
    context.$router.push('/login');
  },
  checkAuth() {
    var jwt = localStorage.getItem('api_token')
    if(jwt) {
      this.user.authenticated = true;
    }else {
      this.user.authenticated = false;
    }
  },

}
