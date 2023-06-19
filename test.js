const mysql = require('mysql2');

(async() => {
    const pool = mysql.createPool({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '000000',
        database: 'test',
        connectionLimit: 1
    }).promise();
    let data = (await pool.query('select * from testable;'))[0];
    for(let i in data) {
        console.log(data[i]);
    }
})();

console.log('雞你太美');