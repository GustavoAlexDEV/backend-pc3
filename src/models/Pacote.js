const { randomUUID } = require('crypto'); 

class Pacote {
    constructor(destino, preco, dataIda, dataVolta) {
        this.id = randomUUID(); // Aqui chamamos a função nativa
        this.destino = destino;
        this.preco = parseFloat(preco);
        this.dataIda = dataIda;
        this.dataVolta = dataVolta;
    }
}
module.exports = Pacote;