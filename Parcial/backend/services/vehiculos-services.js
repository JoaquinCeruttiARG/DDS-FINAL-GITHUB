const sequelize = require("../base-orm/sequelize-init.js");
const {Op} = require("sequelize");

const getAllVehiculos = async () => {
    const dato = await sequelize.models.vehiculos.findAll({
        atributes: [
            "id",
            "propietario",
            "numero_vin",
            "marca",
            "modelo",
            "year",
            "kilometros",
        ],
        order: [[`marca`, "ASC"], [`year`, "DESC"]],
        limit: 50
    });

    return dato.map(d => d.dataValues);
}

const getVehiculosByFilter = async (marca, from, to) => {

  const parsedFrom = from ? parseInt(from, 10) : Number.MIN_SAFE_INTEGER;
  const parsedTo = to ? parseInt(to, 10) : Number.MAX_SAFE_INTEGER;

    if (!from && !to && !marca){
        return await getAllVehiculos();
        console.log("VA AL GET ALL")
    }
    
    if (!marca || marca === "Todas"){
        marca = ""
    }

    const dato = await sequelize.models.vehiculos.findAll({
        atributes: [
            "id",
            "propietario",
            "numero_vin",
            "marca",
            "modelo",
            "year",
            "kilometros",
        ],
        where : {
            kilometros: {
                [Op.gt]: parsedFrom,
                [Op.lt]: parsedTo,
              },
            marca: {[Op.like]: `${marca}%`}
        },
        order: [[`marca`, "ASC"], [`year`, "DESC"]],
        limit: 50
    })
    return dato.map(d => d.dataValues)

}

const vehiculosServices = {
    getAllVehiculos,
    getVehiculosByFilter
}
module.exports = vehiculosServices

