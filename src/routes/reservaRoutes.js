const express = require('express');
const router = express.Router();
const ReservaDAO = require('../dao/ReservaDAO');
const ClienteDAO = require('../dao/ClienteDAO');
const PacoteDAO = require('../dao/PacoteDAO');
const Reserva = require('../models/Reserva');

router.post('/', (req, res) => {
    const { clienteId, pacoteId, valorPago } = req.body;

    if (!ClienteDAO.findById(clienteId) || !PacoteDAO.findById(pacoteId)) {
        return res.status(404).json({ error: 'Cliente ou Pacote não encontrados.' });
    }

    const novaReserva = new Reserva(clienteId, pacoteId, valorPago);
    const criada = ReservaDAO.create(novaReserva);
    res.status(201).json(criada);
});

router.get('/', (req, res) => {
    res.json(ReservaDAO.findAllEnriched());
});

// Rota específica do Relatório
router.get('/relatorios/destinos', (req, res) => {
    res.json(ReservaDAO.getRelatorioDestinos());
});

module.exports = router;