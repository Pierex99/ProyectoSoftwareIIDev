const db = require("../dao/models");

const eventoPedidoAPI =
{
    get : async (req, res) =>
    {
        const pedidoIdB = req.params.id

        const arregloEventoP = await db.Evento_Pedido.findAll(
        {
            where : {idPedido : pedidoIdB}
        });

        res.json(
        {
            data : arregloEventoP,
            msg : ""
        })
    },

    post : async (req, res) =>
    {
        const eventoPedido = req.body;

        const eventoPedidoNuevo =
        {
            idPedido: eventoPedido.idPedido,
            idEvento: eventoPedido.idEvento,
            cantidad: eventoPedido.cantidad,
            montoP: eventoPedido.montoP
        }

        const eventoPedidoGuardado = await db.Evento_Pedido.create(eventoPedidoNuevo);
        const objRes =
        {
            data : eventoPedidoGuardado,
            msg : ""
        }
        res.json(objRes);
    }
}

module.exports = eventoPedidoAPI;