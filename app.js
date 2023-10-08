const express = require('express');
const schoolRoutes = require('./src/router/schoolRoutes')

const app = express();
app.use(express.json());

app.use('/api/schools', schoolRoutes);

module.exports = app;