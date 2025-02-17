const { RDV } = require('../models');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const rdv = await RDV.create(req.body);
        res.status(201).json(rdv);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { date, PatientsID, PraticiensID } = req.body;


        const rdv = await RDV.create({
            date,
            PatientsID: PatientsID ? PatientsID : null,
            PraticiensID,
        });

        res.status(201).json(rdv);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const rdv = await RDV.findAll();
        res.status(200).json(rdv);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.get('/praticien/:praticienId', async (req, res) => {
    try {
        const { praticienId } = req.params;

        // Récupère tous les RDV d'un praticien donné
        const rdvs = await RDV.findAll({
            where: { PraticiensID: praticienId }
        });

        if (rdvs.length > 0) {
            res.status(200).json(rdvs);
        } else {
            res.status(404).json({ message: 'Aucun RDV trouvé pour ce praticien' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const rdv = await RDV.findByPk(req.params.id);
        if (rdv) {
            await rdv.destroy();
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'RDV not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put('/rdv/:id', async (req, res) => {
    try {
        const rdv = await RDV.findByPk(req.params.id);
        if (rdv) {
            await rdv.update(req.body);
            res.status(200).json(rdv);
        } else {
            res.status(404).json({ error: 'RDV not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;