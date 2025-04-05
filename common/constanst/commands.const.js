//aqui vamos agregando los comandos que se pueden usar en el bot
// Definición de comandos
const CommandType = {
    HELP: '/help',
    SOPORTE:'/soporte',
  };
  
  // Lista de comandos válidos (para verificación)
  const validCommands = Object.values(CommandType);
  
  // Verifica si un texto es un comando
  function isCommand(text) {
    return validCommands.includes(text.toLowerCase());
  }
  
  module.exports = { isCommand, CommandType};