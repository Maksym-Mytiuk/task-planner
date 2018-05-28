import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

import router from './router'
import store from './store'
import App from './App'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(Vuetify);

new Vue({
	components: {App},
	router,
	store,
	template: '<App/>'
}).$mount('#app');
