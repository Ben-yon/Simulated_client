import './../assets/style.scss';
//import VeeValidate from 'vee-validate';
//import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import MobileListView from '@/components/partials/list-view.vue';

export default {
    /**
     * This method will be called by main Vue instance
     * It registers all install plugins and custom plugins
     * It registers global components too
     *
     * @param {Object} Vue
     * @return {undefined}
     */
    install(Vue) {
        /**
         * Register installed external plugins
         */
       // Vue.use(VeeValidate);

        /**
         * Register installed external components
         */
        Vue.component('app-loader', PulseLoader);
        Vue.component('app-list-view', MobileListView);
    }
}