export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negocioacao) {
        this.negociacoes.push(negocioacao);
    }
    lista() {
        return this.negociacoes;
    }
}
