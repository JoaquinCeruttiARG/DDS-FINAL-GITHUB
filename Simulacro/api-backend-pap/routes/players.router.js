const playerServices = require("../services/players.services");
const express = require("express")

const router = express.Router();

router.get("", async (req, res, next) => {
    try {
        const rdo = await playerServices.getPlayersByFilter(req.query.filtro, req.query.orden)
        return res.json(rdo)
    } catch (err) {
        next(err)
    }
})

const playersRouter = {
    router
}

module.exports = playersRouter


/*

Express es un framework de aplicación web para Node.js. Es minimalista, flexible y está diseñado para
construir aplicaciones web y APIs de manera rápida y sencilla en Node.js.

Routing: Facilita la creación de rutas HTTP con métodos como GET, POST, PUT, DELETE, entre otros,
lo que permite manejar peticiones a URLs específicas.

"routing" se refiere al proceso de determinar cómo una aplicación responde a una solicitud de cliente particular.
Esto implica asociar una URL y un método de solicitud HTTP (como GET, POST, PUT, DELETE, etc.) con una función o un
conjunto de acciones que deben realizarse cuando esa URL específica se solicita con el método correspondiente.

*/