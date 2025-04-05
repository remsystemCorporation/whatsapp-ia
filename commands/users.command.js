const jsonPlaceholder = require('../services/api/jsonPlaceholder.service');

//formateamos la respuesta para mostrarla en el chat
function formatUser(user) {
    return [
        `👤 *${user.name}*`,
        `📧 ${user.email}`,
        `🏢 ${user.company.name}`,
        `🌐 ${user.website}`
    ].join('\n');
}

module.exports = {
    execute: async (msg) => {
        try {
            await msg.reply('🔍 Obteniendo datos de usuarios...');
            //llamamos a la api para obtener los usuarios
            const users = await jsonPlaceholder.getUsers();
            //mostramos solo los primeros 5 usuarios
            const limitedUsers = users.slice(0, 5);
            
            let response = '📋 *Lista de Usuarios para Soporte*\n\n';
            //aqui llamamos a la funcion que formatea la respuesta
            response += limitedUsers.map(formatUser).join('\n\n');
            response += `\n\n_Mostrando ${limitedUsers.length} de ${users.length} usuarios_`;

            //enviamos la respuesta al chat
            await msg.reply(response);
        } catch (error) {
            console.error('Error en comando /users:', error);
            await msg.reply('❌ Error al obtener datos. Por favor intenta más tarde.');
        }
    }
};