const express = require('express');
const router = express.Router();
const PacoteDAO = require('../dao/PacoteDAO');
const Pacote = require('../models/Pacote');

router.post('/', (req, res) => {
    const { destino, preco, dataIda, dataVolta } = req.body;
    const novoPacote = new Pacote(destino, preco, dataIda, dataVolta);
    const criado = PacoteDAO.create(novoPacote);
    res.status(201).json(criado);
});

router.get('/', (req, res) => {
    res.json(PacoteDAO.findAll());
});

module.exports = router;