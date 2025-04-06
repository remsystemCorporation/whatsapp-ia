# 🤖 WhatsApp Bot con Groq AI

![Node.js](https://img.shields.io/badge/Node.js-18.x-green) ![WhatsApp](https://img.shields.io/badge/WhatsApp-Web%20API-blue)
### Bot `v1.0.0`

## 📋 Requisitos Previos

```bash
Node.js 18.x+
NPM 9.x+
Crea una cuenta en Groq (https://console.groq.com)
Número de WhatsApp dedicado
```
# 🔧 Crea un archivo llamado rules.txt
```bash
## 📌 Propósito
El archivo `rules.txt` define el comportamiento, conocimiento y estilo de respuesta del asistente virtual, dejare el que hice como ejemplo.
```


# 🔧 Configuración .env
```bash
# Configuración Groq (obligatorio)
GROQ_API_KEY=tu_api_key_aqui
GROQ_MODEL=mixtral-8x7b-32768
TEMPERATURE=0.7
MAX_TOKENS=1024

# API Externa (opcional)
API_BASE_URL=https://api.ejemplo.com
```

# Instalar dependencias
npm install whatsapp-web.js \
            qrcode-terminal \
            dotenv \
            fs \
            groq-sdk \
            axios

# Iniciar bot
npm start

# 🏗 Estructura de archivos
```bash
.
├── commands/
│   ├── help.command.js
│   └── users.command.js
├── config/
│   └── whatsapp-client.js
├── services/
│   ├── Groq.service.js
│   └── api.service.js
├── .env
├── readme.txt
│── rules.txt
└── app.js
```

## 🛠 Comandos disponibles
```bash
// Ejemplo de implementación
{
  HELP: '/help',      // Muestra ayuda
  USERS: '/users',    // Lista usuarios API
}
```

# 📌 Notas importantes
```bash
- No compartas tu GROQ_API_KEY
+ Actualiza regularmente las dependencias
```