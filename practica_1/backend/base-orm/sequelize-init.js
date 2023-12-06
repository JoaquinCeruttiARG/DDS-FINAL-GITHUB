const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({dialect: "sqlite", storage: "./data/databaseFile.db"});
const VehiculosModel = require("../models/vehiculos-model")
const UsuariosModel = require("../models/usuarios-model")

sequelize.define("vehiculos", VehiculosModel.vehiculosAttributes, VehiculosModel.vehiculosMethods)
sequelize.define("usuarios", UsuariosModel.usuariosAttributes, UsuariosModel.usuariosMethods)


module.exports = sequelize;


