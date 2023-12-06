const DataTypes = require("sequelize");

const usuariosAttributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    usuarios: {
        type: DataTypes.STRING,
        allowNull: false
    }
}

const usuariosMethods = {
    timestamps: false
}

const UsuariosModel = {
    usuariosAttributes,
    usuariosMethods
}
module.exports = UsuariosModel
