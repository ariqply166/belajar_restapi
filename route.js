'use strict';

module.exports = function(app){
    var json = require('./controller');

    app.route('/')
    .get(json.index);

    app.route('/tampil')
    .get(json.datamahasiswa);

    app.route('/tampil/:id').get(json.datamahasiswaById);
    app.route('/insertdata').post(json.addMahasiswa);
    app.route('/updatedata').put(json.updateMahasiswa);
    app.route('/deletedata').put(json.deleteMahasiswa);
};