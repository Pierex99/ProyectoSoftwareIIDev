const db = require("../dao/models");

const productoPedidoAPI =
{
    get : async (req, res) =>
    {
        const pedidoIdB = req.params.id

        const arregloProductoP = await db.Producto_Pedido.findAll(
        {
            where : {idPedido : pedidoIdB}
        });

        res.json(
        {
            data : arregloProductoP,
            msg : ""
        })
    },

    post : async (req, res) =>
    {
        const productoPedido = req.body;

        const productoPedidoNuevo =
        {
            idPedido: productoPedido.idPedido,
            idProducto: productoPedido.idProducto,
            cantidad: productoPedido.cantidad,
            montoP: productoPedido.montoP
        }

        const productoPedidoGuardado = await db.Producto_Pedido.create(productoPedidoNuevo);
        const objRes =
        {
            data : productoPedidoGuardado,
            msg : ""
        }
        res.json(objRes);
    }
}

module.exports = productoPedidoAPI;