const Usuario = require('../models/usuario');


const existenteEmail = async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});

    if(existeEmail){
        throw new Error(`el mail ${correo} ya se fue registrado`);
    } 

}


const existeUsuarioId = async (id='') => {
    const existeUsuario = await Usuario.findOne({id});

    if(!existeUsuario){
        throw new Error(`el usuario con el ${id} no existe`);
    }

}

module.exports = {
    existenteEmail,
    existeUsuarioId
}