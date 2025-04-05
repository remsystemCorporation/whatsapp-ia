const { Client, LocalAuth } = require('whatsapp-web.js'); // Cliente principal de WhatsApp
const qrcode = require('qrcode-terminal'); // Para mostrar QR en terminal

// Configurar el cliente de WhatsApp con autenticación local
const client = new Client({
  puppeteer: { headless: true }, // Ejecutar sin interfaz gráfica
  authStrategy: new LocalAuth() // Almacenar credenciales localmente
});

// Manejadores de eventos del cliente
client.on('qr', qr => qrcode.generate(qr, { small: true })); // Mostrar QR para autenticación
client.on('ready', () => console.log("🔰 Bot listo")); // Confirmar conexión exitosa
client.on('authenticated', () => console.log("✅ Autenticado")); // Confirmar autenticación
client.on('auth_failure', () => console.error("❌ Error de autenticación")); // Notificar fallo
client.on('disconnected', () => client.initialize()); // Reconectar automáticamente

// Exportar el cliente configurado
module.exports = client;