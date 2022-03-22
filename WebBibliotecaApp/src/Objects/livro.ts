

export class Livro {
    CodLivro = 0;
    TiTulo: string = '';
    Descricao: string = '';
    NumeroExemplar: string = '';
    Autor: string = '';
    Editora: string = '';
    ColeCao: string = '';
    Tipo: string = '';
    SeCao: string = '';
    Volume: string = '';
    AnoEdicAo: string = '';
    IdIoma: string = '';
    StatuS: string = ''; 

    constructor( CodLivro: number, TiTulo: string, Descricao: string, NumeroExemplar: string, Autor: string, Editora: string, ColeCao: string, Tipo: string, SeCao: string, Volume: string, AnoEdicAo: string, IdIoma: string, StatuS: string){
        this.CodLivro = CodLivro;
        this.TiTulo = TiTulo;
        this.Descricao = Descricao;
        this.NumeroExemplar = NumeroExemplar;
        this.Autor = Autor;
        this.Editora = Editora;
        this.ColeCao = ColeCao;
        this.Tipo = Tipo;
        this.SeCao = SeCao;
        this.Volume = Volume;
        this.AnoEdicAo = AnoEdicAo;
        this.IdIoma = IdIoma;
        this.StatuS = StatuS;
    }
}

