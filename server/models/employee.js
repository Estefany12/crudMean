const mongoose = require('mongoose'); 
const { Schema } = mongoose; //esquemas mongoo


//modelar datos 
const PatientSchema = new Schema({
    name: { type: String, required: true},
    numss: { type: String, required: true },
    direccion: { type: String, required: true },
    phone: { type: Number, required: true},
    sexo: { type: String, required: true},
    estado_civil: { type: Number, required: true},
});
//pasandolo a un modelo de datos
module.exports = mongoose.model('Employee', PatientSchema);