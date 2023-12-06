const express = require('express');
const cors = require('cors');
const app = express();
const playersRouter = require("./routes/players.router")
// leer archivo de configuracion
require('dotenv').config();

// para poder leer json en el body
app.use(express.json()); 

// Configuración de CORS
app.use(cors());

// Configuracion URL GET PLAYERS
const playerURL = playersRouter.router
app.use("/api/players", playerURL);


// Inicio del servidor
const port = 3001;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
});

module.exports = app;


/*

CORS significa "Cross-Origin Resource Sharing" (Compartir Recursos entre Orígenes Cruzados) y es 
un mecanismo de seguridad implementado en los navegadores web para controlar las solicitudes HTTP entre 
diferentes dominios, subdominios o protocolos.

NODE.JS:
Node.js es un entorno de ejecución de JavaScript basado en el motor V8 de Google Chrome.

*/