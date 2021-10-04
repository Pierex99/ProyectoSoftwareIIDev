const db = require("../dao/models");

const ProductoAPI =
{
    getAll : async (req, res) =>
    {
        const arregloProducto = await db.Producto.findAll();
        res.json(
        {
            data : arregloProducto,
            msg : ""
        })
    }
}

module.exports = ProductoAPI;