export class Negociacao {
    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    getquantidade() {
        return this._quantidade;
    }
    getvalor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
