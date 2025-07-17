export class Negociacao{
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number){
        this._data = data
        this._quantidade = quantidade
        this._valor =valor
    }

    getquantidade(){
        return this._quantidade
    }

    getvalor(){
        return this._valor
    }

    get volume(){
        return this._quantidade * this._valor
    }
}