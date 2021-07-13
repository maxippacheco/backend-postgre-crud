const { Router } = require("express");
const { getUsuarios, crearUsuarios, getUsuarioById, updateUsuario, deleteUsuario } = require("../controllers/usuarios");


const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuarioById);
router.post('/', crearUsuarios);
router.put('/:id', updateUsuario);
router.delete('/:id', deleteUsuario);

module.exports = router;