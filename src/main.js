import Vue from 'vue';
import VueRouter from 'vue-router';
import VueLocalStorage from 'vue-localstorage';
import VueAxios from 'vue-axios';

import axios from 'axios';
import Materials from "vue-materials";

import routes from './routes';

Vue.use(Materials);
Vue.use(VueRouter);
Vue.use(VueLocalStorage);
Vue.use(VueAxios, axios);

export const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
});

new Vue({
    router: router
}).$mount('#app');