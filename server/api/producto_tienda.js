const db = require("../dao/models");

const ProductoTiendaDAO =
{
    getProductoTienda : async (productoTiendaId) =>
    {
        const arregloProductoTienda = await db.Producto_Tienda.findAll({
            where : {idTienda : productoTiendaId}
        });
        return arregloProductoTienda;
    }
}

module.exports = ProductoTiendaDAO;