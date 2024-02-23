const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');
const { mascotasGet, getMascotaByid, mascotasPost, mascotasPut, mascotasDelete } = require('../controllers/mascota.controller');
const { existeMascotaById } = require('../helpers/db-validators');

const router = Router();

router.get("/", mascotasGet);

router.get(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], getMascotaByid);

router.post(
    "/",
    [
        check("tipo", "El tipo es obligatorio").not().isEmpty(),
        check("raza", "La raza es obligatorio").not().isEmpty(),
        check("color", "El color es obligatorio").not().isEmpty(),
        check("edad", "La edad es obligatoria").not().isEmpty(),
        check("situacion", "La situacion es obligatoria").not().isEmpty(),
        validarCampos,
    ], mascotasPost);

router.put(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotasPut);

router.delete(
    "/:id",
    [
        check("id", "El id no es un formato válido de MongoDB").isMongoId(),
        check("id").custom(existeMascotaById),
        validarCampos
    ], mascotasDelete);

    
module.exports = router;