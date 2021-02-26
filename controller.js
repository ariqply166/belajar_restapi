'use strict';

var response = require('./res');
var koneksi = require('./koneksi');
const { connect } = require('./koneksi');


exports.index = function (req, res) {
    response.ok('Aplikasi REST API jalan !', res);
};

exports.datamahasiswa = function (req, res) {
    koneksi.query('SELECT * FROM mahasiswa', function (err, rows, fields) {
        if (err) {
            console.log(err);
        } else {
            response.ok(rows, res);
        }
    });
};

exports.datamahasiswaById = function (req, res) {
    let id = req.params.id;
    koneksi.query('SELECT * FROM mahasiswa WHERE id = ?', [id], function (err, rows, fields) {
        if (err) {
            console.log(err);
        } else {
            response.ok(rows, res);
        }
    });
};


// input data
exports.addMahasiswa = function (req, res) {
    const {nama,nim,jurusan} = req.body;
    // var nim = req.body.nim;
    // var nama = req.body.nama;
    // var jurusan = req.body.jurusan;

    koneksi.query(`INSERT INTO mahasiswa (nim,nama,jurusan) VALUES ('${nim}','${nama}','${jurusan}')`,
        function (err, rows, field){
            if(err){
                console.log(err);
            }else{
                response.ok("Input Masuk !",res)
            }
        });
}
