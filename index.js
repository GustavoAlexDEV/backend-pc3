const express = require('express');
const cors = require('cors');

const pacoteRoutes = require('./src/routes/pacoteRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const reservaRoutes = require('./src/routes/reservaRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API Modularizada de Viagens ✈️');
});

app.use('/pacotes', pacoteRoutes);
app.use('/clientes', clienteRoutes);
app.use('/reservas', reservaRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;