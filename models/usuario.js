const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'el correo es obligatorio']
    },
    password: {
        type: String,
        required: [true, 'el password es obligatorio']
    },
    img: {
        type: String
    },
    role:{
        type: String,
        required: true,
        enum: ["ADMIN_ROLE","USER_ROLE"]
    },
    estado:{
      type: Boolean,
      default: true  
    },
    google:{
        type: Boolean,
        default: false
    }


});

/*UsuarioSchema.methods.toJSON = function(){
    const{__v, password, ...usuario} = this.Object();
    return usuario;
}*/

module.exports = model('Usuario', UsuarioSchema);