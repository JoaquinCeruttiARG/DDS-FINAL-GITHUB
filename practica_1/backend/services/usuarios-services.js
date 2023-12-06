const sequelize = require("../base-orm/sequelize-init.js");
const {Op} = require("sequelize");

const getAllUsuarios = async () => {
    const dato = await sequelize.models.usuarios.findAll({
        attributes: [
            "id",
            "nombre",
        ],
        order: [[`id`, "ASC"]],
        limit: 50
    });

    return dato.map(d => d.dataValues);
}

const getUsuariosByFilter = async (id, nombre) => {

    if (!id && !nombre){
        return await getAllUsuarios();
    }
    
    if (!id || id === "Todos"){
        id = ""
    }

    const dato = await sequelize.models.usuarios.findAll({
        attributes: [
            "id",
            "nombre",
        ],
        where : {
            id: {[Op.like]: `${id}%`},
            nombre: {[Op.like]: `${nombre}%`}
        },
        order: [[`id`, "ASC"]],
        limit: 50
    })
    return dato.map(d => d.dataValues)

}

const usuariosServices = {
    getAllUsuarios,
    getUsuariosByFilter
}
module.exports = usuariosServices
