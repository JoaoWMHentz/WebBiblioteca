export class Colecao {
  codColecao = 0;
  nomeColecao: string = "";
  autor: string = "";
  editora: string = "";
  anoLancamento = 0;

  constructor(CodColecao: number, NomeColecao: string, Autor: string, Editora: string, AnoLancamento: number) {
    this.codColecao = CodColecao;
    this.nomeColecao = NomeColecao;
    this.autor = Autor;
    this.editora = Editora;
    this.anoLancamento = AnoLancamento;
  }
}
