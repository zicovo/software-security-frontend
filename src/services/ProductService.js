import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: 10000
})

export default {


    async getProducts(accesToken) {
        try {
            const { data } = await apiClient.get('/products', {headers: {Authorization: `Bearer ${accesToken}`}})
            return data;
        } catch (error) {
            console.log(error)
        }

    }
}