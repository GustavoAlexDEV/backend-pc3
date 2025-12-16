const express = require('express');
const router = express.Router();
const PacoteDAO = require('../dao/PacoteDAO');


router.post('/', async (req, res) => {
    try {
        console.log("Tentando criar pacote:", req.body); // Log para ver o que chega

        const criado = await PacoteDAO.create(req.body);
        res.status(201).json(criado);
    } catch (error) {
        // 👇 ISSO É O MAIS IMPORTANTE: VAI APARECER NO LOG DA VERCEL
        console.error("ERRO AO CRIAR PACOTE:", error); 
        res.status(500).json({ error: 'Erro ao criar pacote: ' + error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const lista = await PacoteDAO.findAll();
        res.json(lista);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar pacotes' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const sucesso = await PacoteDAO.delete(req.params.id);
        if (sucesso) res.status(204).send();
        else res.status(404).json({ error: 'Pacote não encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir' });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const atualizado = await PacoteDAO.update(req.params.id, req.body);
        if (atualizado) res.json(atualizado);
        else res.status(404).json({ error: 'Pacote não encontrado' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar' });
    }
});

module.exports = router;