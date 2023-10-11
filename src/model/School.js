const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    codigo: {
        type: Number,
    },
    provincia: {
        type: String,

    },
    distrito: {
        type: String,

    },
    posto: {
        type: String,

    },
    localidade: {
        type: String,

    },
    nome: {
        type: String,

    },
    latitude: {
        type: Number,

    },
    longitude: {
        type: Number

    },
}, { strict: false });

module.exports = mongoose.model('Escola', schema);
