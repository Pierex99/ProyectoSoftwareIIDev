const db = require("../dao/models");

const UsuarioDAO =
{
    getUsuario : async (usuarioId) =>
    {
        const arregloUsuario = await db.Usuario.findAll({
            where : {id : usuarioId}
        });
        return arregloUsuario;
    },
    post : async (req, res) =>
    {
        const usuarioPedido = req.body;

        const usuarioPedidoNuevo =
        {
            idPedido: usuarioPedido.idPedido,
            idProducto: usuarioPedido.idProducto,
            cantidad: usuarioPedido.cantidad,
            montoP: usuarioPedido.montoP
        }

        const usuarioPedidoGuardado = await db.Usuario_Pedido.create(usuarioPedidoNuevo);
        const objRes =
        {
            data : usuarioPedidoGuardado,
            msg : ""
        }
        res.json(objRes);
    },
    getAll : async () =>
    {
        const arregloUsuario = await db.Usuario.findAll();
        return arregloUsuario
    }
}

module.exports = UsuarioDAO;