const express = require('express');
const schoolRoutes = require('./src/router/schoolRouutes')

const app = express();
app.use(express.json());

app.get('/', (req, res) => {

    res.status(200).json({ msg: "Hello world" });

});

app.use('/api/schools', schoolRoutes);

app.listen('3001', () => {
    console.log("servidor rodando em http://localhost:3001");
});



