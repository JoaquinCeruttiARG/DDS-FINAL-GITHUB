const DataTypes = require("sequelize");

const playersAttributes = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nickname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ip_address:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    avatar:{
        type: DataTypes.STRING,
        allowNull: false
    }
}

const playersMethods = {
    timestamps: false           // Para NO agregar una columna con la fecha de creación el objeto.
}

const PlayersModel = {
    playersAttributes,
    playersMethods
}

module.exports = PlayersModel

