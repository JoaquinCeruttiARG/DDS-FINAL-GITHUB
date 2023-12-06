const express = require("express");
const router = express.Router();
const db = require("../base-orm/sequelize-init");
const { Op, ValidationError } = require("sequelize");

router.get('/api/empresas', async function(req, res){
    const razonSocial = req.query.RazonSocial;
    const rubro = req.query.Rubro;

    const queryOptions = {
        where: {}
    };

    if (razonSocial){
        queryOptions.where.razonSocial = {[Op.like]: `%${razonSocial}%`}
    }
    if (rubro){
        queryOptions.where.rubro = {[Op.like]: `%${rubro}%`}
    }

    let data = await db.empresas.findAll(queryOptions);
    res.json(data);
    console.log(data)
})

module.exports = router;