export class Emprestimo {
  codEmprestimo = 0;
  leitor: string = "";
  cpfleitor: string = "";
  livro: string = "";
  exemplar = 0;
  dataEmprestimo: string = "";
  dataDevolucao: string = "";
  status: string = "";

  constructor(codEmprestimo: number, leitor: string, cpfleitor: string, livro: string, exemplar: number, dataEmprestimo: string, dataDevolucao: string, status: string){
    this.codEmprestimo = codEmprestimo;
    this.leitor = leitor;
    this.cpfleitor = cpfleitor;
    this.livro = livro;
    this.exemplar = exemplar;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucao = dataDevolucao;
    this.status = status;
  }
}
