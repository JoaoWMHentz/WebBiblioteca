using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace BibliotecaApiDLL.leitor
{
    public class LeitorDao
    {
        private string TableName => "MvtBIBLeitor";
        public void Salvar(Leitor leitor)
        {
            using (var cmd = new SqlCommand())
            {
                // Monta o comando para o DB
                cmd.CommandText = InsertCommand;
                // Seta os parametros para o DB
                cmd.Parameters.AddWithValue("@CodLeitor", leitor.CodLeitor);
                cmd.Parameters.AddWithValue("@nome", leitor.Nome);
                cmd.Parameters.AddWithValue("@senha", leitor.Senha);
                cmd.Parameters.AddWithValue("@Sexo", leitor.Sexo);
                cmd.Parameters.AddWithValue("@dataNascimento", leitor.DataNascimento);
                cmd.Parameters.AddWithValue("@cpf", leitor.Cpf);
                cmd.Parameters.AddWithValue("@rg", leitor.Rg);
                cmd.Parameters.AddWithValue("@email", leitor.Email);
                cmd.Parameters.AddWithValue("@telefone", leitor.Telefone);
                cmd.Parameters.AddWithValue("@telefoneCelular", leitor.TelefoneCelular);
                cmd.Parameters.AddWithValue("@enderecoRua", leitor.EnderecoRua);
                cmd.Parameters.AddWithValue("@enderecoNumero", leitor.EnderecoNumero);
                cmd.Parameters.AddWithValue("@enderecoBairo", leitor.EnderecoBairro);
                cmd.Parameters.AddWithValue("@enderecoCidade", leitor.EnderecoCidade);
                cmd.Parameters.AddWithValue("@enderecoCep", leitor.EnderecoCep);
                cmd.Parameters.AddWithValue("@enderecoUf", leitor.EnderecoUF);
                // Faz a conexao com o DB
                using (var Con = new Conexao())
                {
                    cmd.Connection = Con.Conectar();
                    cmd.ExecuteNonQuery();
                }
            }
        }
        public List<Leitor> GetDados()
        {
            var leitores = new List<Leitor>();
            using (var cmd = new SqlCommand())
            {
                // Monta o comando para o DB
                cmd.CommandText = SelectCommand;
                using (var Con = new Conexao())
                {
                    // Faz a conexao com o DB
                    cmd.Connection = Con.Conectar();
                    var reader = cmd.ExecuteReader();
                    // Le o DataReader 
                    while (reader.Read())
                    {
                        leitores.Add(ReaderToLeitor(reader));
                    }
                }
            }
            // Retorna os Leitores
            return leitores;
        }
        private Leitor ReaderToLeitor(SqlDataReader reader)
        {
            // Converte da leitura do DB para a classe Letor
            return new Leitor(
                Convert.ToInt32(reader["CodLeitor"]),
                Convert.ToString(reader["nome"]),
                "",
                Convert.ToChar(reader["Sexo"]),
                Convert.ToString(reader["dataNascimento"]),
                Convert.ToString(reader["cpf"]),
                Convert.ToString(reader["rg"]),
                Convert.ToString(reader["email"]),
                Convert.ToString(reader["telefone"]),
                Convert.ToString(reader["telefoneCelular"]),
                Convert.ToString(reader["enderecoRua"]),
                Convert.ToInt32(reader["enderecoNumero"]),
                Convert.ToString(reader["enderecoBairro"]),
                Convert.ToString(reader["enderecoCidade"]),
                Convert.ToString(reader["enderecoCep"]),
                Convert.ToString(reader["enderecoUf"])
                ); 
        }
        private string SelectCommand => $@"
            SELECT TOP (1000) [CodLeitor]
              ,[nome]
              ,[Sexo]
              ,[dataNascimento]
              ,[cpf]
              ,[rg]
              ,[email]
              ,[telefone]
              ,[telefoneCelular]
              ,[enderecoRua]
              ,[enderecoNumero]
              ,[enderecoBairro]
              ,[enderecoCidade]
              ,[enderecoCep]
              ,[enderecoUf]
            FROM [MvtBiblioteca].[dbo].[{TableName}]";
        private string InsertCommand => $@"
            INSERT INTO {TableName} (CodLeitor,
                nome,
                senha,
                Sexo,
                dataNascimento,
                cpf,
                rg,
                email,
                telefone,
                telefoneCelular,
                enderecoRua,
                enderecoNumero,
                enderecoBairro,
                enderecoCidade,
                enderecoCep,
                enderecoUf)
            VALUES (@CodLeitor,
                @nome, 
                @senha,
                @Sexo,
                @dataNascimento,
                @cpf,
                @rg,
                @email,
                @telefone,
                @telefoneCelular,
                @enderecoRua,
                @enderecoNumero,
                @enderecoBairro,
                @enderecoCidade,
                @enderecoCep,
                @enderecoUf)";
    }
}
