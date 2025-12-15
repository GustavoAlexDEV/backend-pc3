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

// Adicione as rotas
router.delete('/:id', (req, res) => {
    const sucesso = ReservaDAO.delete(req.params.id);
    if (sucesso) res.status(204).send();
    else res.status(404).json({ error: 'Reserva não encontrada' });
});

router.put('/:id', (req, res) => {
    const atualizado = ReservaDAO.update(req.params.id, req.body);
    if (atualizado) res.json(atualizado);
    else res.status(404).json({ error: 'Reserva não encontrada' });
});

module.exports = router;