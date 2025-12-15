const express = require('express');
const router = express.Router();
const ClienteDAO = require('../dao/ClienteDAO');
const Cliente = require('../models/Cliente');

router.post('/', (req, res) => {
    const { nome, email, telefone } = req.body;
    
    if (ClienteDAO.findByEmail(email)) {
        return res.status(400).json({ error: 'Email já cadastrado.' });
    }

    const novoCliente = new Cliente(nome, email, telefone);
    const criado = ClienteDAO.create(novoCliente);
    res.status(201).json(criado);
});

router.get('/', (req, res) => {
    res.json(ClienteDAO.findAll());
});

module.exports = router;