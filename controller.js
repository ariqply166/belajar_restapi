'use strict';

var response = require('./res');
var koneksi = require('./koneksi');
const { connect } = require('./koneksi');


exports.index = function(req,res){
    response.ok('Aplikasi REST API jalan !',res);
};

exports.datamahasiswa = function(req,res){
    koneksi.query('SELECT * FROM mahasiswa', function(err,rows,fields){
        if(err){
            koneksi.log(err);
        }else{
            response.ok(rows, res);
        }
    });
};