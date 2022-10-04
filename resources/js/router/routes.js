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
        path: '*',
        component: loadPageComponent('errors/404.vue')
    }
];
