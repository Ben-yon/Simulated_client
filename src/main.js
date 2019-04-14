import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Vuelidate from 'vuelidate';
import globalMixin from './mixins/global';

Vue.use(Vuelidate);
Vue.mixin(globalMixin);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
