require("express-async-errors"); // captura errores en promesas, usar async await
const express = require("express");
const path = require("path");

// leer archivo de configuracion
require('dotenv').config();

console.log("base", process.env.base);
console.log("NODE_ENV", process.env.NODE_ENV);

require("./base-orm/sqlite-init.js"); // crear base si no existe

// crear servidor
const app = express();

// configurar servidor
const cors = require("cors");
app.use(cors({
  origin: '*'
}));

const cookieParser = require("cookie-parser");
app.use(cookieParser()); // entiende cookies

app.use(express.text()); // entiende texto
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(express.json()); // para poder leer json en el body

// sirve archivos estaticos
app.use("/", express.static(path.join(__dirname, "public")));



const equiposRouter = require("./routes/equipos.js");
const ecoRouter = require("./routes/eco.js");
const erroresRouter = require("./routes/errores.js");
const facturasRouter = require("./routes/facturas.js");
const automovilesRouter = require("./routes/automoviles.js")
const provinciasRouter = require("./routes/provincias.js");

app.use(ecoRouter)
app.use(equiposRouter);
app.use(erroresRouter)
app.use(facturasRouter)
app.use(automovilesRouter)
app.use(provinciasRouter);

//------------------------------------
//-- Control de errores --------------
//------------------------------------
const { errorHandler, _404Handler } = require("./error-handler/errorhandler");
app.use(errorHandler);
app.use(_404Handler);


//------------------------------------
//-- INICIO ---------------------------
//------------------------------------

if (!module.parent) {   // si no es llamado por otro modulo, es decir, si es el modulo principal -> levantamos el servidor
  const port = process.env.PORT || 3002;   // en produccion se usa el puerto de la variable de entorno PORT
  app.locals.fechaInicio = new Date();
  app.listen(port, () => {
    console.log(`sitio escuchando en el puerto ${port}`);
  });
}

module.exports = app;