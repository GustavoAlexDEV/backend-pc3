const express = require('express');
const router = express.Router();
const ClienteDAO = require('../dao/ClienteDAO');


router.get('/', async (req, res) => { 
    try {
        const dados = await ClienteDAO.findAll();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar clientes' });
    }
});


router.post('/', async (req, res) => { 
    try {
        const { email } = req.body;
        const existe = await ClienteDAO.findByEmail(email);
        if (existe) {
            return res.status(400).json({ error: 'Email já cadastrado.' });
        }

        const criado = await ClienteDAO.create(req.body);
        res.status(201).json(criado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente' });
    }
});


router.delete('/:id', async (req, res) => { 
    try {
        const sucesso = await ClienteDAO.delete(req.params.id);
        if (sucesso) res.status(204).send();
        else res.status(404).json({ error: 'Cliente não encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir' });
    }
});


router.put('/:id', async (req, res) => { 
    try {
        const atualizado = await ClienteDAO.update(req.params.id, req.body);
        if (atualizado) res.json(atualizado);
        else res.status(404).json({ error: 'Cliente não encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar' });
    }
});

module.exports = router;