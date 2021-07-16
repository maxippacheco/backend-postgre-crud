const pool = require("../config/config")


const getAllCategories = async(req, res) => {
	
	const { rows } = await pool.query('SELECT * FROM categories');

	res.json({ categories: {
		rows
	}})

}

const getCategoriesById = async(req, res) => {
	let { name } = req.params;

	name = name.toLowerCase();
	name = `${name[0].toUpperCase()}${name.slice(1)}`;

	const { rows } = await pool.query('SELECT * FROM categories WHERE name = $1', [ name ]);
	
	res.json({categorie: {rows}});	
}

const createCategorie = async(req, res) => {
	
	const { name } = req.body;

	const categorie = await pool.query('INSERT INTO categories VALUES($1)', [name]);

	res.json({
		msg:'New categorie created',
		name
	})
}


module.exports = {
	getAllCategories,
	getCategoriesById,
	createCategorie
}