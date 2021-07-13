const { Pool } = require('pg');

const config = {
	host: 'localhost',
	user: 'postgres',
	password: process.env.PASSWORD,
	database: 'firtsapi',
	port: '5432'
}

const pool = new Pool(config);

module.exports = pool;