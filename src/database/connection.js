const mongoose = require('mongoose');
require('dotenv').config(); 

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}); 

const db = mongoose.connection;

db.on('error', (err) => {
    console.error(`Erro de conexão com o MongoDB: ${err.message}`);
});

db.once('open', () => {
    console.log('Conexão com o MongoDB estabelecida com sucesso.');
});
   