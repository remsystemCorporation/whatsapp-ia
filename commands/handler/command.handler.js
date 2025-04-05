const { CommandType } = require('../../common/constanst/commands.const');
const helpCommand = require('../help.command');    // Handler para comando /help
const usersCommand = require('../users.command');  // Handler para comando /users

// Mapa de asignación de comandos a handlers
const commandHandlers = {
    [CommandType.HELP]: helpCommand,      // Asocia /help → helpCommand
    [CommandType.SOPORTE]: usersCommand,  // Asocia /soporte → usersCommand
    // Se pueden añadir más comandos aquí
};

function handleCommand(command, msg) {
    const handler = commandHandlers[command];
    
    if (handler) {
        handler.execute(msg);  // Ejecuta la lógica específica del comando
        return true;           // Indica que el comando fue manejado
    }
    
    return false;  // Indica que el comando no fue reconocido
}

// Exportar solo la función principal del módulo
module.exports = { handleCommand };

/**
 * Manejador centralizado de comandos del bot
 * 
 * Responsabilidades:
 * - Gestionar el enrutamiento de comandos a sus respectivos handlers
 * - Proporcionar una interfaz única para ejecución de comandos
 */

// Importar tipos de comandos y handlers específicos

/**
 * Ejecuta el handler correspondiente a un comando recibido
 * @param {string} command - Comando a ejecutar (ej. '/help')
 * @param {object} msg - Objeto del mensaje de WhatsApp
 * @returns {boolean} True si se manejó el comando, False si no se reconoció
 */