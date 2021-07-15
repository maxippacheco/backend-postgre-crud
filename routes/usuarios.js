const { Router } = require("express");
const { check } = require("express-validator");
const { getUsuarios, crearUsuarios, getUsuarioById, updateUsuario, deleteUsuario } = require("../controllers/usuarios");
const { validarCampos } = require("../middlewares/validar-campos");


const router = Router();

router.get('/', getUsuarios);

router.get('/:id', getUsuarioById);

router.post('/', [
	check('name').not().isEmpty(),
	check('email').isEmail(),
	check('email').not().isEmpty(),
	check('password').notEmpty(),
	validarCampos
] ,crearUsuarios);

router.put('/:id', updateUsuario);

router.delete('/:id', deleteUsuario);

module.exports = router;