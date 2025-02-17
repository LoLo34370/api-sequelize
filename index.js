const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');
const db = require('./models');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
db.sequelize.sync().then(() => {
    console.log('Database connected');
});


// Define routes here
const patientRoutes = require('./routes/patients');
app.use('/patient', patientRoutes);

const practicienRoutes = require('./routes/practiciens');
app.use('/practicien', practicienRoutes);

const rdvRoutes = require('./routes/rdv');
app.use('/rdv', rdvRoutes);


const factureRoutes = require('./routes/factures');
app.use('/facture', factureRoutes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
