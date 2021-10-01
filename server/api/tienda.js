const db = require("../dao/models");

const TiendaAPI =
{
    getAll : async (req, res) =>
    {
        const arregloTienda = await db.Tienda.findAll();
        res.json(
        {
            data : arregloTienda,
            msg : ""
        })
    }
}

module.exports = TiendaAPI;