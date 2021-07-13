const express = require('express');
const cors = require('cors');


class Server{

	constructor(){
		this.app = express();
		this.port = process.env.PORT;
		this.apiPaths = {
			usuarios: '/api/usuarios'
		}

		this.middlewares();
		this.routes();
	}

	middlewares(){
		this.app.use(cors());
		this.app.use(express.json());
	}

	routes(){
		this.app.use(this.apiPaths.usuarios, require('../routes/usuarios'));
	}

	listen(){
		this.app.listen(this.port, () => {
			console.log(`Servidor corriendo en puerto ${this.port}`);
		})
	}

}

module.exports = Server;