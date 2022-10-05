function loadPageComponent(path) {
    return () => import(`~/pages/${path}`).then(m => m.default || m);
}

export default [
    {
        path: '/',
        name: 'discover',
        component: loadPageComponent('Discover.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: loadPageComponent('Auth/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: loadPageComponent('Auth/Register.vue')
    },
    {
        path: '*',
        component: loadPageComponent('errors/404.vue')
    }
];
