const Usuario = require('../models/usuario')
const { Router } = require('express');
const router = Router();

router.post(
    "/loginUser",

    async (req, res) => {
        const credentials = req.body;
        const usuario = await Usuario.findOne({
            correo: credentials.correo
        });
        
        // Desencriptamoa la contra modo hacker, bienvenidos amantes de la programacion con Felix
        if(!usuario){
            res.status(403).json({
                msg: "El Usuario no existe"
            });
            return;
        }

        if(usuario.password !== credentials.password){
            res.status(403).json({
                msg: "La Contraseña Incorrecta!"
            });
            return;
        }

        res.status(200).json({
            msg: "El Usuario esta logueado"
        })
    }
)

module.exports = router;