'use strict';

module.exports = function(app){
    var json = require('./controller');

    app.route('/')
    .get(json.index);

    app.route('/tampil')
    .get(json.datamahasiswa);

    app.route('/tampil/:id').get(json.datamahasiswaById);
    app.route('/tambah').post(json.addMahasiswa);
};