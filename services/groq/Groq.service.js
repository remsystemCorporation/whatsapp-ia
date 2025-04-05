const Groq = require('groq-sdk');
const { readFileSync } = require('fs');
const { join } = require('path');

// Inicialización del cliente Groq con API Key
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

//aqui el archivo readme.txt tiene el contexto inicial y las respuestas predefinidas
//el "contexto es mas que un promt con las reglas que la IA debe seguir para responder"
function loadContext() {
  const contextPath = join(__dirname, '../../rules.txt');
  const data = readFileSync(contextPath, 'utf8');
  const predefined = {};
  let systemPrompt = "";

  // Parsear cada línea del archivo
  data.split('\n').forEach(line => {
    line.includes(':') 
      ? predefined[line.split(':')[0].trim().toLowerCase()] = line.split(':')[1].trim()
      : systemPrompt += line + '\n';
  });

  return { predefined, systemPrompt };
}

//destructuracion del contexto
const { predefined, systemPrompt } = loadContext();

//y aqui se define la funcion getAIResponse que es la que se llama desde el controlador
//la funcion recibe un texto y si el texto es una de las respuestas predefinidas, devuelve esa respuesta 
//pero si es un comando, esta funcion ya no se activa 
function getAIResponse(text) {
  if (predefined[text]) return predefined[text];

  return groq.chat.completions.create({
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: text }
    ],
    model: process.env.GROQ_MODEL
  }).then(completion => {
    return completion.choices[0]?.message?.content || "No tengo una respuesta para eso.";
  });
}

module.exports = { getAIResponse };

/**
 * Servicio para interactuar con la API de Groq AI
 * 
 * Funcionalidades principales:
 * - Carga contexto inicial desde archivo
 * - Maneja respuestas predefinidas
 * - Consulta a la API de Groq para respuestas generativas
 */
