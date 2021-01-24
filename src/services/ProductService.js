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

    async getProducts() {
        try {
            const { data } = await apiClient.get('/products')
            console.log(data[0])
            return data
        } catch (error) {
            console.log(error)
        }

    },

    async getMyProducts(accessToken, userId){
        try {
            const { data } = await apiClient.get(`/products/${userId}`, {headers: {Authorization: `Bearer ${accessToken}`}})
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    },

    async createProduct(accessToken, product){
        try {
            console.log(product)
            const {data} = await apiClient.post('/products', product, {headers: {Authorization: `Bearer ${accessToken}`}})
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    },

    async deleteProduct(accessToken, product){
        try {
            const { data } = await apiClient.delete(`/products/${product.id}`,  {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
        } catch (error) {
            console.log(error)
        }
    },
    async deleteProductAdmin(accessToken, product){
        try {
            const { data } = await apiClient.delete(`products/adminDelete/${product.id}`,  {headers: {Authorization: `Bearer ${accessToken}`}})
            return data
        } catch (error) {
            console.log(error)
        }
    },

    async updateProduct(accessToken, _product){
        const payload = {
            product: _product,
        }
        try {
            const { data } = await apiClient.put(`/products/${_product.id}`, payload, { headers: {Authorization: `Bearer ${accessToken}`}})
            return data
        } catch (error) {
            console.log(error)
        }
    },

}