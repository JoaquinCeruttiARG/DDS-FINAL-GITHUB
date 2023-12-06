const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({dialect: "sqlite", storage: "./data/databaseFile.db"});
const VehiculosModel = require("../models/vehiculos-model")

sequelize.define("vehiculos", VehiculosModel.vehiculosAttributes, VehiculosModel.vehiculosMethods)

module.exports = sequelize;


