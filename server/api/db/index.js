const mysql = require('mysql');
const config = require('../../config')

const pool = mysql.createPool({
    connectionLimit: 10,
    password: config.database.password,
    user: config.database.user,
    database: config.database.database_name,
    host: config.database.host,
    port: config.database.port,
});


// let diseases = {};


// diseases.

module.exports = pool