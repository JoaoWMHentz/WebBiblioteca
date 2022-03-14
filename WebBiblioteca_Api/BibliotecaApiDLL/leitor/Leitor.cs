namespace BibliotecaApiDLL.leitor
{
    public class Leitor
    {
        public Leitor(int codLeitor, string nome, string senha, char sexo, string dataNascimento, string cpf, string rg, string email, string telefone, string telefoneCelular, string enderecoRua, int enderecoNumero, string enderecoBairro, string enderecoCidade, string enderecoCep, string enderecoUF)
        {
            CodLeitor = codLeitor;
            Nome = nome;
            Senha = senha;
            Sexo = sexo;
            DataNascimento = dataNascimento;
            Cpf = cpf;
            Rg = rg;
            Email = email;
            Telefone = telefone;
            TelefoneCelular = telefoneCelular;
            EnderecoRua = enderecoRua;
            EnderecoNumero = enderecoNumero;
            EnderecoBairro = enderecoBairro;
            EnderecoCidade = enderecoCidade;
            EnderecoCep = enderecoCep;
            EnderecoUF = enderecoUF;
        }
        public int CodLeitor { get; set; }
        public string Nome { get; set; }
        public string Senha { get; set; }
        public char Sexo { get; set; }
        public string DataNascimento { get; set; }
        public string Cpf { get; set; }
        public string Rg { get; set; }
        public string Email { get; set; }
        public string Telefone { get; set; }
        public string TelefoneCelular { get; set; }
        public string EnderecoRua { get; set; }
        public int EnderecoNumero { get; set; }
        public string EnderecoBairro { get; set; }
        public string EnderecoCidade { get; set; }
        public string EnderecoCep { get; set; }
        public string EnderecoUF { get; set; }
    }
}
