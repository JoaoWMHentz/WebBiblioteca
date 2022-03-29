export class Secao {
    codSecao: number = 0;
    descricaoSecao: string = '';
    descricaoLocal: string = '';

    constructor(codSecao: number, descricaoLocal: string, descricaoSecao: string){
        this.codSecao = codSecao;
        this.descricaoLocal = descricaoLocal;
        this.descricaoSecao = descricaoSecao;
    }
}
