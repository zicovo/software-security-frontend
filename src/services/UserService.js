import axios from 'axios'

const apiClient = axios.create({
    // baseURL: 'https://api-software-security.zaci.xyz/api',
    baseURL: 'http://localhost:4000/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

export default{

    async findOne(accessToken, id){
        try {
            const { data } = await apiClient.get(`/users/${id}`, {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
        } catch (error) {
            console.log(error)
            
        }
    },

    async userInit(accessToken, user){
        try {
            const { data } = await apiClient.post('/users/init', user, {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
        } catch (error) {
            console.log(error)
            
        }
    },

    async isUserCompleted(accessToken, id){
        try {
            const { data } = await apiClient.get(`/users/isCompleted/${id}`, {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
        } catch (error) {
            console.log(error)
        }
    },

    async updateUser(accessToken, user){
        console.log(user)
        try {
            const { data } = await apiClient.put(`/users/${user.id}`, user, {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
        } catch (error) {
            console.log(error)
        }
    },

    async fetchUserWithRoles(accessToken, id){
        try {
            const { data } = await apiClient.get(`/users/withRoles/${id}`, {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
        } catch (error) {
            console.log(error)
        }
    },

    async getAllUserData(accessToken, id){
        try {
            const { data } = await apiClient.get(`/users/getAllUserData/${id}`, {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
            
        } catch (error) {
            console.log(error)
        }
    },

    async deleteUser(accessToken, id){
        try {
            const { data } = await apiClient.delete(`/users/${id}`, {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
            
        } catch (error) {
            console.log(error)
        }
    }


}