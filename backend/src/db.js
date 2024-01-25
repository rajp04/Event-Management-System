const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'event'
})

db.connect((err) => {
    if (err) {
        console.log(err);
    }else{
        console.log('Connected to MySQL');
    }
});

module.exports = db