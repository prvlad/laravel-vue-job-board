export default {
    methods: {
        goTo(url) {
            if (app.$router.currentRoute.path != url) {
                app.$router.push(url);
            }
        }
    }
}
