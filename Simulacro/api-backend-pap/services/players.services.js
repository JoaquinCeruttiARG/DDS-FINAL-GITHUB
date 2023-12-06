const sequelize = require("../base-orm/sequelize-init.js");
const {Op} = require("sequelize");

const getAllPlayers = async () => {
    const data = await sequelize.models.players.findAll({
        atributes: [
            "id",
            "full_name",
            "email",
            "nickname",
            "ip_address",
            "age",
            "avatar",
        ],
        order: [["id", "ASC"]],
    });
    return data.map(d => d.dataValues);
}


const getPlayersByFilter = async (filtro,orden) => {
    if (!filtro && !orden){
        return await getAllPlayers();
    }
    if (!orden){
        orden = "id"
    }
    const data = await sequelize.models.players.findAll({
        atributes: [
            "id",
            "full_name",
            "email",
            "nickname",
            "ip_address",
            "age",
            "avatar",
        ],
        where : {
            // Elije entre las siguientes opciones con "or"
            [Op.or]: [
                // Nombre_columna: condición
                {email: {[Op.like]: `${filtro}%`}},
                {full_name:  {[Op.like]: `${filtro}%`}},
                {nickname:  {[Op.like]: `${filtro}%`}}
            ]
        },
        order: [[`${orden}`, "ASC"]]

    })
    return data.map(d => d.dataValues)

}

const playerServices = {
    getAllPlayers,
    getPlayersByFilter
}
module.exports = playerServices