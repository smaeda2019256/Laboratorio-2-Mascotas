const {Schema, model} = require('mongoose');

const MascotaSchema = Schema ({
    tipo: {
        type: String,
        required: [true, 'El tipo es obligatorio']
    },
    raza: {
        type: String,
        required: [true, 'La raza es obligatorio']
    },
    color: {
        type: String,
        required: [true, 'El color es obligatorio']
    },
    edad: {
        type: String,
        required: [true, 'La edad es obligatoria']
    },
    situacion: {
        type: String,
        required: [true, 'La situacion es obligatoria']
    },
    estado:{
        type: Boolean,
        default: true
    }

});

module.exports = model('Mascota', MascotaSchema);