const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const {
    mascotasPost, 
    mascotasGet,
    getMascotaById,
    putMascotas,
    mascotasDelete
} = require('../controllers/mascota.controller');

const { existeMascotaId } = require('../helpers/db-validators');

const router = Router();

router.get("/", mascotasGet);

router.get(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existeMascotaId),
        validarCampos
    ], getMascotaById
);

router.put(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existeMascotaId),
        validarCampos
    ], putMascotas
);

router.post(
    "/",
    [
        check("nombre", "Nombre no puede estar vacio").not().isEmpty(),
        check("especie", "La especie debe ser definida").not().isEmpty(),
        check("raza", "La raza debe ser definida").not().isEmpty(),
        check("edad", "Edad no puede estar vacio"),
        validarCampos
    ], mascotasPost
);

router.delete(
    "/:id",
    [
        check('id', 'No es un id valido').isMongoId(),
        check('id').custom(existeMascotaId),
        validarCampos
    ], mascotasDelete
);

module.exports = router;