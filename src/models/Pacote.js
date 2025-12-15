const { v4: uuidv4 } = require('uuid');

class Pacote {
    constructor(destino, preco, dataIda, dataVolta) {
        this.id = uuidv4();
        this.destino = destino;
        this.preco = parseFloat(preco);
        this.dataIda = dataIda;
        this.dataVolta = dataVolta;
    }
}
module.exports = Pacote;