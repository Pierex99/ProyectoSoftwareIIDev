const db = require("../dao/models");

const productoAPI =
{
    get : async (req, res) => 
    {
        const prId = req.params.id;

        const productoBuscado = await db.Producto.findAll(
        {
            where : {id : prId}
        });

        if (productoBuscado[0] != null) {
            const objRes = 
            {
                data : {
                    id : productoBuscado[0].id,
                    nombre : productoBuscado[0].nombre,
                    monto : productoBuscado[0].monto,
                    medida : productoBuscado[0].medida
                },
                msg : ""
            }
            res.json(objRes);
        }
        else 
        {
            const objResError = 
            {
                msg : "No existe un recurso con ese id"
            }
            res.status(400).json(objResError);
        }
    },

    post : async (req, res) => 
    {
        const pr = req.body;
        const arregloProducto = await db.Producto.findAll({order: ['id']});
        var idNupro = arregloProducto[arregloProducto.length-1].id+1;


        if (pr.nombre == undefined || pr.monto == undefined) 
        {
            const objError = 
            {
                msg : "Debe ingresar todos los valores de producto"
            }
            res.status(400).json(objError)
            return;
        }
    
        const productoNuevo = 
        {
            id : idNupro,
            nombre : pr.nombre,
            monto : pr.monto,
            categoria : 0,
            medida: pr.medida,
            createdAt : new Date(),
            updatedAt : new Date()
        }

        const prGuardado = await db.Producto.create(productoNuevo);
        const objRes = 
        {
            data : prGuardado,
            msg : ""
        }
        res.json(objRes);
    },

    put : async (req, res) => 
    {
        const pr = req.body;
        const prId = pr.id;
    
        const registro = await db.Producto.update(
        {
            nombre : pr.nombre,
            monto : pr.monto,
            categoria : 0,
            medida: pr.medida,
            updatedAt : new Date()
        }, {
            where : 
            {
                id : prId
            }
        });

        if (registro != null)
        {
            const objRes =
            {
                data : registro,
                msg : ""
            }

            res.json(objRes);
            return;
        }
        else
        {
            const objError = 
            {
                msg : "No se encontro producto con el id enviado"
            }
            res.status(400).json(objError);
        }
    },

    delete : async (req, res) => 
    {
        const prId = req.params.id;

        await db.Producto.destroy(
        {
           where : {id : prId} 
        });

        res.json({msg : ""});
    },

    getAll : async (req, res) =>
    {
        console.log(`lol`);
        const arregloProducto = await db.Producto.findAll();
        res.json(
        {
            data : arregloProducto,
            msg : ""
        })
    }
}

module.exports = productoAPI;