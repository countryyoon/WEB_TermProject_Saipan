const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    port: 4000,
    user: 'root',
    password: 'wjdtkd6*',
    database: 'webdb'
});

module.exports=db;