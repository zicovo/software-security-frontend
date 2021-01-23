import UserService from '@/services/UserService'
import { getInstance } from '../../auth/index';
export const state = {user: {}}

export const namespaced = true;

export const mutations = {
    SET_USER(state, user){
        state.user = user
    },
    UPDATE_USER(state, user){
        state.user = user
    }
}

export const actions = {
    async fetchUser({ commit }, id){
        try {
            const authService = await getInstance()
            const token = await authService.getTokenSilently()
            const user = await UserService.findOne(token, id)
            console.log(user)
            commit('SET_USER', user)
        } catch (error) {
            console.log(error)
        }
    },

    async updateUser({commit}, user){
        try {
            const authService = await getInstance()
            const token = await authService.getTokenSilently()
            const updatedUser = await UserService.updateUser(token, user)
            console.log(updatedUser)
            commit('UPDATE_USER', updatedUser)
        } catch (error) {
            console.log(error)
        }
    }
}

export const getters = {}