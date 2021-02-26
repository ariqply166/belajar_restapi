var mysql = require('mysql');

const koneksi = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'belajar_nodejs'
});

koneksi.connect((err)=>{
    if(err) throw err;
    console.log('Mysql Konek !');
});

module.exports = koneksi;