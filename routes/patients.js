const express = require('express');
const router = express.Router();
const { Patients } = require('../models');

router.post('/', async (req, res) => {
    try {
        const patient = await Patients.create(req.body);
        res.status(201).json(patient);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const patients = await Patients.findAll();
        res.status(200).json(patients);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const patient = await Patients.findByPk(req.params.id);
        if (patient) {
            await patient.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const patient = await Patients.findByPk(req.params.id);
        if (patient) {
            await patient.update(req.body);
            res.status(200).json(patient);
        } else {
            res.status(404).json({ error: 'Patient not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;


