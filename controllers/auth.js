const pool = require("../config/config");
const { generarJWT } = require("../helpers/generarJWT");

const login = async(req, res) => {

	const { email, password } = req.body;

	const {rows} = await pool.query( 'SELECT * FROM users WHERE email = $1 AND password = $2', [email, password] );

	const id = rows[0].id;

	//TODO: Validations => password => email => user exists => id => etc 

	const token = await generarJWT( id );

	res.json({
		rows,
		token
	});
}


module.exports = {
	login
}