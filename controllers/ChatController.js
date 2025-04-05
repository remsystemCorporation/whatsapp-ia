const { getAIResponse } = require('../services/groq/Groq.service.js'); // Servicio de IA
const { isCommand } = require('../common/constanst/commands.const.js'); // Validador de comandos
const { handleCommand } = require('../commands/handler/command.handler.js'); // Manejador de comandos

class ChatController {

  constructor(client) {
    this.client = client;
    this.setupMessageHandler();
  }
  
  setupMessageHandler() {
    this.client.on('message', async (msg) => {
      const text = msg.body.toLowerCase().trim();
      console.log("📩 Mensaje recibido:", text);

      // Manejo de comandos especiale
      //isCommand es una función que verifica si el mensaje es un comando o un simple texto, si es simple texto se envía a la IA
      //y esta responde al usuario
      if(isCommand(text)) {
        return handleCommand(text, msg); // Delegar a command.handler
      }

      // Procesamiento de mensajes regulares con IA
      try {
        const response = await getAIResponse(text); // Consultar al servicio de IA
        msg.reply(response); // Enviar respuesta al usuario
      } catch (error) {
        console.error("❌ Error:", error);
        msg.reply("¡Ups! Ocurrió un error.");
      }
    });
  }
}

// Exportar la clase para su uso en otros módulos
module.exports = { ChatController };

/**
 * Controlador principal del chat - Gestiona el flujo de mensajes del bot
 * 
 * Responsabilidades:
 * 1. Configurar el handler de mensajes entrantes
 * 2. Distinguir entre comandos y mensajes regulares
 * 3. Delegar el procesamiento a los módulos correspondientes
 */
