export class Editora {
    codEditora = 0;
    nomeEditora: string = '';
    descricaoEditora: string = ''

    constructor(codEditora: number, nomeEditora: string, descricaoEditora: string ){
        this.codEditora = codEditora;
        this.nomeEditora = nomeEditora;
        this.descricaoEditora = descricaoEditora;
    }
}
