const db = require("../dao/models");

const eventoAPI =
{
    get : async (req, res) => 
    {
        const evId = req.params.id;

        const eventoBuscado = await db.Evento.findAll(
        {
            where : {id : evId}
        });

        if (eventoBuscado[0] != null) {
            const objRes = 
            {
                data : {
                    id : eventoBuscado[0].id,
                    nombre : eventoBuscado[0].nombre,
                    fecha : eventoBuscado[0].fecha,
                    monto : eventoBuscado[0].monto
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
        const ev = req.body;
        const arregloEvento = await db.Evento.findAll({order: ['id']});
        var idNuevo = arregloEvento[arregloEvento.length-1].id+1;


        if (ev.nombre == undefined || ev.monto == undefined) 
        {
            const objError = 
            {
                msg : "Debe ingresar todos los valores de evento"
            }
            res.status(400).json(objError)
            return;
        }
    
        const eventoNuevo = 
        {
            id : idNuevo,
            nombre : ev.nombre,
            fecha: "",
            monto : ev.monto,
            tipo : 0,
            categoria : 0,
            createdAt : new Date(),
            updatedAt : new Date()
        }

        const evGuardado = await db.Evento.create(eventoNuevo);
        const objRes = 
        {
            data : evGuardado,
            msg : ""
        }
        res.json(objRes);
    },

    put : async (req, res) => 
    {
        const ev = req.body;
        const evId = ev.id;
    
        const registro = await db.Evento.update(
        {
            nombre : ev.nombre,
            fecha: "",
            monto : ev.monto,
            tipo : 0,
            categoria : 0,
            updatedAt : new Date()
        }, {
            where : 
            {
                id : evId
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
                msg : "No se encontro videojuego con el id enviado"
            }
            res.status(400).json(objError);
        }
    },

    delete : async (req, res) => 
    {
        const evId = req.params.id;

        await db.Evento.destroy(
        {
           where : {id : evId} 
        });

        res.json({msg : ""});
    },

    getAll : async (req, res) =>
    {
        var fechaB = req.query.fecha;
        var tipoB = req.query.tipo;
        var categoriaB = req.query.categoria;

        var fechaSeleccion = true;
        var tipoSeleccion = true;
        var categoriaSeleccion = true;

        if (fechaB == undefined || fechaB == null){
            fechaB = "";
            fechaSeleccion = false;
        }
        if (tipoB == undefined || tipoB == null){
            tipoB = "";
            tipoSeleccion = false;
        }
        if (categoriaB == undefined || categoriaB == null){
            categoriaB = "";
            categoriaSeleccion = false;
        }

        if (fechaSeleccion == true && tipoSeleccion == false && categoriaSeleccion == false)
        {
            var arregloEvento =  await db.Evento.findAll(
            {
                where: {fecha : fechaB}
            }           
            )
        }
        else if (fechaSeleccion == false && tipoSeleccion == true && categoriaSeleccion == false)
        {
            var arregloEvento =  await db.Evento.findAll(
            {
                where: {tipo : tipoB}
            }           
            )
        }
        else
        {
            var arregloEvento = await db.Evento.findAll({order: ['id']});
        }

        res.json(
        {
            data : arregloEvento,
            msg : ""
        })
    }
}

module.exports = eventoAPI;