// Configurar ORM sequelize
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({dialect: "sqlite", storage: "./.data/databaseFile.db"});
const PlayersModel = require("../models/players.js")

// Definición del modelo
sequelize.define("players", PlayersModel.playersAttributes, PlayersModel.playersMethods)

module.exports = sequelize;


/*

Sequelize es un ORM (Object-Relational Mapping) para Node.js. Este tipo de herramientas facilitan la 
interacción con bases de datos relacionales al permitir a los desarrolladores trabajar con objetos y clases 
en lugar de consultas directas a la base de datos.

*/
