
const express = require('express');
const cors = require('cors');
const schoolRoutes = require('./src/router/schoolRoutes')
const connection = require('./src/database/connection')
require('dotenv').config();


const app = express();

app.use(cors());
app.use(express.json());


app.use('/', (req, res) => {
    res.json({ msg: "Hello World" })
});

app.use('/api/mz/schools', schoolRoutes);

const port = process.env.PORT || "5001"

app.listen(port, () => {
    console.log(`servidor rodando em http://localhost:${port}`);
});

