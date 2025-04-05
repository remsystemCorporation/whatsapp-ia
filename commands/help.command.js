// este comando es fijo y no cambia
const helpMessage = `
🆘 *Help Center* 🆘

📞 Contact our team:
- WhatsApp: +25 962 521 9691
- Email: support@cursosdev.com
- Website: remsystem.org

🕒 Horas de trabajo:
Lunes-viernes: 9AM - 6PM
Sabados: 10AM - 2PM
`;

//si se detecta el comando "help" se ejecuta la funcion
module.exports = {
    execute: (msg) => {
        msg.reply(helpMessage);
    }
};