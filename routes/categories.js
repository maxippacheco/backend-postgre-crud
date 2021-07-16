const { Router } = require("express");
const { getCategoriesById, getAllCategories, createCategorie } = require("../controllers/categories");

const router = Router();

router.get('/', getAllCategories);
router.get('/:name', getCategoriesById);
router.post('/', createCategorie);

module.exports = router;