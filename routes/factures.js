const { Factures } = require('../models');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const facture = await Factures.create(req.body);
        res.status(201).json(facture);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const factures = await Factures.findAll();
        res.status(200).json(factures);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const facture = await Factures.findByPk(req.params.id);
        if (facture) {
            await facture.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Facture not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const facture = await Factures.findByPk(req.params.id);
        if (facture) {
            await facture.update(req.body);
            res.status(200).json(facture);
        } else {
            res.status(404).json({ error: 'Facture not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;