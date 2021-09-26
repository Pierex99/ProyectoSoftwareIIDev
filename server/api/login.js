const db = require('../dao/models');

const login =
{
    post : async (req, res) =>
    {
        const usernameB = req.body.username;
        const passwordB = req.body.password;

        const usuarioBuscado = await db.Usuario.findAll(
        {
            where :
            {
                username : usernameB,
                password : passwordB
            }
        }
        )

        if (usuarioBuscado[0] != null && usuarioBuscado[0].username != "admin@ulima.com") 
        {
            const objRes =
            {
                data: 
                {
                    id: usuarioBuscado[0].id,
                    username: usuarioBuscado[0].username,
                    password: usuarioBuscado[0].password
                },
                msg: "Usuario Demo"
            }
            
            res.json(objRes);
        }
        else if (usuarioBuscado[0] != null && usuarioBuscado[0].username == "admin@ulima.com")
        {
            res.json(
            {
                msg : "Admin Demo"
            })
        }
        else
        {
            res.json(
            {
                msg : "Usuario o password incorrecto"
            })
        }
    }
}

module.exports = login;