const db = require("../dao/models");

const ProductoDAO =
{
    getProducto : async (productoId) =>
    {
        const arregloProducto = await db.Producto.findAll({
            where : {id : productoId}
        });
        return arregloProducto;
    }
}

module.exports = ProductoDAO;