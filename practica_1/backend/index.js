const express = require('express');
const cors = require('cors');
const app = express();
const vehiculosRouter = require("./routes/vehiculos-router")
const usuariosRouter = require("./routes/usuarios-router")

// leer archivo de configuracion

require('dotenv').config();

// para poder leer json en el body

app.use(express.json()); 

// Configuración de CORS

app.use(cors());

// Agregar aquí nueva ruta para /api/vehiculos

app.use("/api/vehiculos", vehiculosRouter.router)

// Agregar la nueva ruta para /api/usuarios

app.use("/api/usuarios", usuariosRouter.router)

// Inicio del servidor

const port = 3001;

app.listen(port, () => {

  console.log("NODE_ENV", process.env.NODE_ENV);
  console.log(`Servidor iniciado en el puerto ${port}`);

});

module.exports = app;