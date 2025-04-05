const apiClient = require('../../config/axios.config');

class JsonPlaceholderService {
    async getUsers() {
        try {
        const response = await apiClient.get('/users');
        console.log('Response:', response.data);
        return response.data;
        } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
        }
    }
    
    async getUserById(id) {
        try {
        const response = await apiClient.get(`/users/${id}`);
        return response.data;
        } catch (error) {
        console.error(`Error fetching post with ID ${id}:`, error);
        throw error;
        }
    }
}

module.exports = new JsonPlaceholderService();
//en esta clase se encapsulan las peticiones a la API de jsonplaceholder
//si la API tiene muchos endpoints, es recomendable crear un servicio por cada uno de ellos
//practicamente si tienes 5 endpoints para comments podrias crear los 5 en una sola clase
//y otro servicio para otro endpoint diferente
