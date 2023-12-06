const vehiculosServices = require("../services/vehiculos-services");
const express = require("express")

const router = express.Router();

router.get("", async (req, res, next) => {
    try {
        console.log(req.query.from, req.query.to,req.query.marca)
        const rdo = await vehiculosServices.getVehiculosByFilter(req.query.marca, req.query.from,req.query.to)
        return res.json(rdo)
    } catch (err) {
        next(err)
    }
})


const vehiculosRouter = {
    router
}

module.exports = vehiculosRouter
