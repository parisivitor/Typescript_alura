export class Negociacao{

  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number){}

  get volume(): number{
    return this.valor * this.quantidade;
  }

  get data(): Date{
    const data: Date = new Date(this._data.getTime());
    return data;
  }

  static criaDe(dataString: string, quantideString: string, valorString: string): Negociacao{
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantida = parseInt(quantideString);
    const valor = parseFloat(valorString);
    return new Negociacao(date, quantida, valor);
  }
}
