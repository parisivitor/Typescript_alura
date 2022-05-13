import { Negociacao } from "./negociacao.js";

export class Negociacoes {
  private negociacoes: Array<Negociacao> = [];
  // private negociacoes: Negociacao[] = [];

  adiciona(negocioacao: Negociacao){
    this.negociacoes.push(negocioacao);
  }

  // lista(): ReadonlyArray<Negociacao>{
  lista(): readonly Negociacao[]{
    return this.negociacoes;
  }
}
