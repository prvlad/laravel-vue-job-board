import routes from './routes'
import Router from 'vue-router'
import Vue from "vue";

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes
})

