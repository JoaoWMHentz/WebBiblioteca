

export class Livro {
    codLivro = 0;
    tiTulo: string = '';
    descricao: string = '';
    numeroExemplar: string = '';
    autor: string = '';
    editora: string = '';
    coleCao: string = '';
    tipo: string = '';
    seCao: string = '';
    volume: string = '';
    anoEdicAo: string = '';
    idIoma: string = '';
    statuS: string = '';



    constructor( CodLivro: number, TiTulo: string, Descricao: string, NumeroExemplar: string, Autor: string, Editora: string, ColeCao: string, Tipo: string, SeCao: string, Volume: string, AnoEdicAo: string, IdIoma: string, StatuS: string){
        this.codLivro = CodLivro;
        this.tiTulo = TiTulo;
        this.descricao = Descricao;
        this.numeroExemplar = NumeroExemplar;
        this.autor = Autor;
        this.editora = Editora;
        this.coleCao = ColeCao;
        this.tipo = Tipo;
        this.seCao = SeCao;
        this.volume = Volume;
        this.anoEdicAo = AnoEdicAo;
        this.idIoma = IdIoma;
        this.statuS = StatuS;
    }
}

