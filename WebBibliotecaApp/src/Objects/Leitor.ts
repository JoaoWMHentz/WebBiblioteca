export class Leitor {
    codLeitor = 0;
    nome: string = '';
    senha: string = '';
    sexo : string = '';
    dataNascimento: string = '';
    cpf: string = '';
    rg: string = '';
    email: string = '';
    telefone: string = '';
    telefoneCelular: string = '';
    enderecoRua: string = '';
    enderecoNumero: number = 0;
    enderecoBairro: string = '';
    enderecoCidade: string = '';
    enderecoCep: string = '';
    enderecoUF: string = '';

    constructor(codLeitor: number, nome: string, senha: string, sexo: string,
         dataNascimento: string, cpf: string, rg: string, email: string, telefone: string, telefoneCelular: string, enderecoRua: string,
         enderecoNumero: number, enderecoBairro: string, enderecoCidade: string
         , enderecoCep: string, enderecoUf: string){

          this.codLeitor = codLeitor;
          this.nome = nome;
          this.senha = senha;
          this.sexo = sexo;
          this.dataNascimento = dataNascimento;
          this.cpf = cpf;
          this.rg = rg;
          this.email = email;
          this.telefone = telefone;
          this.telefoneCelular = telefoneCelular;
          this.enderecoRua = enderecoRua;
          this.enderecoNumero = enderecoNumero;
          this.enderecoBairro = enderecoBairro;
          this.enderecoCidade = enderecoCidade;
          this.enderecoCep = enderecoCep;
          this.enderecoUF = enderecoUf;
        }
      }

