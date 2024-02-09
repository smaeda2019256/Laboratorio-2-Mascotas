const { Schema, model } = require('mongoose');

const MascotaSchema = Schema({
    nombre:{
        type: String, 
        required: [true, 'El nombre de la mascota es obligatorio']
    },
    especie:{
        type: String,
        required: [true, 'La especie de la Mascota es obligatoria']
    },
    raza:{
        type: String,
        required: [true, 'La raza de la mascota es obligatoria']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('mascota', MascotaSchema);