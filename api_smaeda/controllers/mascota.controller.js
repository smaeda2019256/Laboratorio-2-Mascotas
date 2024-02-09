const { response } = require('express');
const Mascota = require('../models/mascotas')

const mascotasGet = async (req, res = response) => {
    const {limite, desde } = req.query;
    const query = { estado: true};

    const [total, mascotas] = await Promise.all([
        Mascota.countDocuments(query),
        Mascota.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ]);

    res.status(200).json({
        total, 
        mascotas
    });


}

module.exports = {
    mascotasGet
}

