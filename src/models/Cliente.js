const { randomUUID } = require('crypto'); // Mudou aqui

class Cliente {
    constructor(nome, email, telefone) {
        this.id = randomUUID(); // Mudou aqui
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}
module.exports = Cliente;