const db = require("../dao/models");

const ofertaAPI =
{
    getAll : async (req, res) =>
    {
        const arregloOferta = await db.Oferta.findAll();
        res.json(
        {
            data : arregloOferta,
            msg : ""
        })
    }
}

module.exports = ofertaAPI;