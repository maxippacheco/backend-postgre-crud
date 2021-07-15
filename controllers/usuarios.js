const bcryptjs = require('bcrypt');
const pool = require("../config/config");


const getUsuarios = async(req, res) => {
	const users = await pool.query('SELECT * FROM users');	
	res.json(users);
}

const getUsuarioById = async(req, res) => {
	
	const { id } = req.params;
	const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [id])

	if ( rows.length === 0 ) {
		return res.status(400).json({ 
			error: {msg: ` The id ${ id } doesn't exists `, rows} 
		}) 
	}

	res.json( rows );


}


const crearUsuarios = async(req, res) => {
	const { name, email, password } = req.body;

	const salt = bcryptjs.genSaltSync();
	const passwordEncrypted = bcryptjs.hashSync(password, salt);

	const newUser = await pool.query('INSERT INTO users(name, email, password) VALUES($1, $2, $3)', [name, email, passwordEncrypted])

	res.json({
		msg: 'user succesfully created',
		body:{
			user: {name, email}
		}
	});
}

const updateUsuario = async(req, res) => {
	
	const {id} = req.params;
	const {name, email} = req.body;

	const updateUsuario = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3', [name, email, id])

	res.json({
		msg: 'user succesfully updated',
		body: {
			name, email
		}
	});
}

const deleteUsuario = async(req, res) => {
	
	const { id } = req.params;
	const response = await pool.query('DELETE FROM users WHERE id = $1', [id]);
	
	console.log(response);

	res.json(`user ${id} was deleted succesfully`);

}


module.exports = {
	getUsuarios,
	getUsuarioById,
	crearUsuarios,
	updateUsuario,
	deleteUsuario
};