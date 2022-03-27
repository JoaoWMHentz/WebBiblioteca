export class Colecao {
  CodColecao = 0;
  NomeColecao: string = '';
  Autor: string = '';
  Editora: string = '';
  AnoLancamento: string = '';

  constructor(CodColecao: number, NomeColecao: string, Autor: string, Editora: string, AnoLancamento: string) {
    this.CodColecao = CodColecao;
    this.NomeColecao = NomeColecao;
    this.Autor = Autor;
    this.Editora = Editora;
    this.AnoLancamento = AnoLancamento;
  }
}
