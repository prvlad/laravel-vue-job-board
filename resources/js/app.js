import Vue from "vue";
import store from '~/store';
import router from '~/router';

import '~/plugins';

require('./bootstrap');

window.Vue = Vue;

Vue.config.productionTip = false

// Components
import navbar from "./components/NavBar";

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        navbar
    },
});

window.app = app;


