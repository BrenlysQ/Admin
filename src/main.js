import Vue from 'vue'

import VueFire from 'vuefire'
import VueSession from 'vue-session'
import App from './App.vue'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import VueResource from 'vue-resource'
import { store } from './store'


// Loading the plugin into the Vue.
Vue.use(VueResource)
//Vue.prototype.$http = VueResource

// Vue Progress
Vue.use(VueProgressBar, { color: '#003366', thickness: '3px' })
Vue.use(VueFire)
var options = {
    persist: true
}
Vue.use(VueSession, options)

// Vue.http.headers.common['Access-Control-Request-Method'] = '*'

Vue.http.interceptors.push((request, next) => {
    request.headers.set('Accept', 'application/json');
    next();
});

// Styles Sass
import './styles/app.scss'

Vue.config.productionTip = false

window.vueapp = new Vue({
  router,
  store: store,
  render: h => h(App)
}).$mount('#app')
