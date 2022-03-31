export class Autor {
    codAutor: number;
    nome: string = '';
    descricao: string = '';

    constructor (codAutor: number, nome: string, descricao: string){
        this.codAutor = codAutor;
        this.descricao = descricao;
        this.nome = nome;
    }
}
