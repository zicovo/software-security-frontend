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

export default {


    // async getProducts(accesToken) {
    //     try {
    //         const { data } = await apiClient.get('/products', {headers: {Authorization: `Bearer ${accesToken}`}})
    //         return data;
    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    async getProducts() {
        try {
            const { data } = await apiClient.get('/products')
            console.log(data[0])
            return data
        } catch (error) {
            console.log(error)
        }

    }
}