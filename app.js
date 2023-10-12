const express = require('express');
const cors = require('cors');
const schoolRoutes = require('./src/router/schoolRoutes')
const connection = require('./src/database/connection')


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/mz/schools', schoolRoutes);
app.use('/', (req, res) => {
    res.json({ msg: "Hello World" })
});

module.exports = app;