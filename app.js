const express = require('express');
const schoolRoutes = require('./src/router/schoolRoutes')
const connection = require('./src/database/connection')

const app = express();
app.use(express.json());

app.use('/api/mz/schools', schoolRoutes);

module.exports = app;