// Cargar variables de entorno desde el archivo .env
// Esto permite acceder a configuraciones sensibles o específicas del entorno
// como API keys, credenciales, etc. mediante process.env
require('dotenv').config();

// Importar la configuración del cliente de WhatsApp
// Este archivo contiene la configuración inicial y autenticación del bot
const client = require('./config/whatsapp-client');

// Importar el controlador principal del chat
// Este módulo contiene la lógica para manejar los mensajes recibidos
const { ChatController } = require('./controllers/ChatController');

// Crear una nueva instancia del controlador de chat
// Pasamos el cliente de WhatsApp para que el controlador pueda interactuar con la API
// Esto configura todos los manejadores de eventos necesarios
new ChatController(client);

// Inicializar el cliente de WhatsApp
// y dispara el proceso de autenticación (generación/escaneo de QR)
client.initialize();