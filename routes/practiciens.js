const { Practiciens } = require('../models');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const practicien = await Practiciens.create(req.body);
        res.status(201).json(practicien);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const practiciens = await Practiciens.findAll();
        res.status(200).json(practiciens);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const practicien = await Practiciens.findByPk(req.params.id);
        if (practicien) {
            await practicien.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Practicien not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const practicien = await Practiciens.findByPk(req.params.id);
        if (practicien) {
            await practicien.update(req.body);
            res.status(200).json(practicien);
        } else {
            res.status(404).json({ error: 'Practicien not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;