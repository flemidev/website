const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Connected to MySQL');
})

module.exports = db;