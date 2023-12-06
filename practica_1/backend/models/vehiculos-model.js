const DataTypes = require("sequelize");

const vehiculosAttributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    propietario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    numero_vin:{
        type: DataTypes.STRING,
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modelo:{
        type: DataTypes.STRING
    },
    year:{
        type: DataTypes.STRING,
        
    },
    kilometros:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}

const vehiculosMethods = {
    timestamps: false
}

const VehiculosModel = {
    vehiculosAttributes,
    vehiculosMethods
}
module.exports = VehiculosModel
