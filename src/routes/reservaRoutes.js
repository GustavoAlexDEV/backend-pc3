const express = require('express');
const router = express.Router();
const ReservaDAO = require('../dao/ReservaDAO');


router.get('/', async (req, res) => { 
    try {
        const dados = await ReservaDAO.findAllEnriched();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar reservas' });
    }
});


router.post('/', async (req, res) => { 
    try {
        const criado = await ReservaDAO.create(req.body);
        res.status(201).json(criado);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar reserva. Verifique os IDs.' });
    }
});


router.delete('/:id', async (req, res) => { 
    try {
        const sucesso = await ReservaDAO.delete(req.params.id);
        if (sucesso) res.status(204).send();
        else res.status(404).json({ error: 'Reserva não encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir' });
    }
});


router.put('/:id', async (req, res) => { 
    try {
        const atualizado = await ReservaDAO.update(req.params.id, req.body);
        if (atualizado) res.json(atualizado);
        else res.status(404).json({ error: 'Reserva não encontrada' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar' });
    }
});

module.exports = router;