const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    codigo: {
        type: Number, // Use Number para campos numéricos

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
        type: Number, // Use Number para campos numéricos

    },
    longitude: {
        type: Number // Use Number para campos numéricos

    },
}, { strict: false });

module.exports = mongoose.model('Escola', schema);
