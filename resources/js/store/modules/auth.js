import axios from "axios";
import Cookies from 'js-cookie';
import * as types from '../mutation-types';

export const state = {
    user: null,
    token: Cookies.get('token')
}

export const getters = {
    user: state => state.user,
    token: state => state.token
}

export const mutations = {
    [types.SAVE_TOKEN] (state, { token }) {
        state.token = token;
        Cookies.set('token', token);
    },
    [types.FETCH_USER_SUCCESS](state, { user }) {
        state.user = user;
    },
    [types.FETCH_USER_FAILURE](state) {
        state.user = null;
        state.token = null;
        Cookies.remove('token');
    }
}

export const actions = {
    saveToken({ commit, dispatch }, payload) {
        commit(types.SAVE_TOKEN, payload);
    },
    async getCurrentUserInfo({ commit }) {
        try {
            const { data } = await axios.get('/api/currentUserInfo');
            commit(types.FETCH_USER_SUCCESS, { user: data });
        } catch (e) {}
    }
}
