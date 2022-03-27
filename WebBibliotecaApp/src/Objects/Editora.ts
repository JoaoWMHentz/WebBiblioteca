export class Editora {
    codEditora = 0;
    nomeEditora: string = '';
    descricaoEDitora: string = ''

    constructor(codEditora: number, nomeEditora: string, descricaoEDitora: string ){
        this.codEditora = codEditora;
        this.nomeEditora = nomeEditora;
        this.descricaoEDitora = descricaoEDitora;
    }
}
