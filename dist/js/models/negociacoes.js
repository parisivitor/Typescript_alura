export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // private negociacoes: Negociacao[] = [];
    adiciona(negocioacao) {
        this.negociacoes.push(negocioacao);
    }
    // lista(): ReadonlyArray<Negociacao>{
    lista() {
        return this.negociacoes;
    }
}
