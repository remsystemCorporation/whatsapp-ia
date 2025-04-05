const axios = require('axios');
require('dotenv').config();

//configurar axios para usarlo en peticiones a la API
//se configura el timeout para que no se quede esperando indefinidamente
const apiClient = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout:5000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
});


//interceptor para manejar errores de la API
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response) {
        console.error('API Error Status:', error.response.status);
        console.error('API Error Data:', error.response.data);
      } else if (error.request) {
        console.error('API Request Error:', error.request);
      } else {
        console.error('API Error:', error.message);
      }
      return Promise.reject(error);
    }
  );

module.exports = apiClient;