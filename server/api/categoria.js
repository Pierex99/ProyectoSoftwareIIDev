const db = require("../dao/models");

const categoriaAPI =
{
    getAll : async (req, res) =>
    {
        const arregloCategoria = await db.Categoria.findAll();
        res.json(
        {
            data : arregloCategoria,
            msg : ""
        })
    }
}

module.exports = categoriaAPI;