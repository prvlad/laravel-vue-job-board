import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";
import store from '~/store';
import router from '~/router';

axios.interceptors.request.use(request => {
    const token = store.getters['auth/token'];

    if (token) {
        request.headers.common.Authorization = `Bearer ${token}`;
    }

    return request;
});

axios.interceptors.response.use(response => response, error => {
    const { status } = error.response;

    if (status === 401 && store.getters['auth/check']) {
        Swal.fire({
            icon: 'warning',
            text: 'Token expired',
            reverseButtons: true,
        }).then(() => {
            store.commit('auth/logout')

            router.push({name: 'login'})
        })
    }

    return Promise.reject(error);
});
