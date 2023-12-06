const usuariosServices = require("../services/usuarios-services");
const express = require("express")

const router = express.Router();

router.get("", async (req, res, next) => {
    try {
        console.log(req.query.id, req.query.nombre)
        const rdo = await usuariosServices.getUsuariosByFilter(req.query.id, req.query.nombre)
        return res.json(rdo)
    } catch (err) {
        next(err)
    }
})


const usuariosRouter = {
    router
}

module.exports = usuariosRouter
