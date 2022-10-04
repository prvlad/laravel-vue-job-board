import Vue from "vue";
import store from '~/store'
import router from '~/router'

require('./bootstrap');

window.Vue = Vue;

Vue.config.productionTip = false

// Components
import navbar from "./components/NavBar";

new Vue({
    el: '#app',
    router,
    store,
    components: {
        navbar
    },
});


