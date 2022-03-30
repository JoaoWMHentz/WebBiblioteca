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

                if(leitor.CodLeitor != 0)
                {
                    cmd.CommandText = UpdateCommand;
                    cmd.Parameters.AddWithValue("@CodLeitor", leitor.CodLeitor);
                }
                else
                {
                    cmd.CommandText = InsertCommand;
                }
                // Seta os parametros para o DB
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
                cmd.Parameters.AddWithValue("@enderecoBairro", leitor.EnderecoBairro);
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
        public List<Leitor> GetDados(int id)
        {
            var leitores = new List<Leitor>();
            using (var cmd = new SqlCommand())
            {
            if(id != 0)
                {
                    cmd.CommandText = $@"
                        SELECT TOP (1000) [CodLeitor]
                          ,[nome]
                          ,[Sexo]
                          ,[dataNascimento]
                          ,[cpf]
                          ,[rg]
                          ,[senha]
                          ,[email]
                          ,[telefone]
                          ,[telefoneCelular]
                          ,[enderecoRua]
                          ,[enderecoNumero]
                          ,[enderecoBairro]
                          ,[enderecoCidade]
                          ,[enderecoCep]
                          ,[enderecoUf]
                        FROM {TableName} WHERE CodLeitor LIKE '%{id}%'";
                }
                else
                {
                    cmd.CommandText = $@"
                        SELECT TOP (1000) [CodLeitor]
                          ,[nome]
                          ,[Sexo]
                          ,[dataNascimento]
                            ,[senha]
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
                        FROM {TableName} WHERE CodLeitor LIKE '%{""}%'";
                }
                
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
                Convert.ToString(reader["senha"]),
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
        public List<Leitor> PesquisaLeitor(Leitor leitor)
        {
            var leitores = new List<Leitor>();
            using (var cmd = new SqlCommand())
            {
                    cmd.CommandText = $@"
                        SELECT TOP (1000) [CodLeitor],[nome],[Sexo],[dataNascimento],[cpf],[rg],[senha],[email],[telefone],[telefoneCelular],[enderecoRua],[enderecoNumero],[enderecoBairro],[enderecoCidade],[enderecoCep],[enderecoUf]
                        FROM {TableName}
                        WHERE CodLeitor LIKE '%{leitor.CodLeitor}%' AND[
                        WHERE UPPER(nome) LIKE '%{leitor.Nome.ToUpper()}%'
                        WHERE (cpf) LIKE ''%{leitor.Cpf}%";
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
        private string SelectCommand => $@"
            SELECT TOP (1000) [CodLeitor]
              ,[nome]
              ,[Sexo],
               [senha]
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
            FROM {TableName} WHERE CodLeitor LIKE '%@id%'";
        private string InsertCommand => $@"
            INSERT INTO {TableName} (
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
            VALUES (
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
        private string UpdateCommand => $@"UPDATE {TableName}
                           SET	nome = @nome,
		                        senha = @senha,
		                        Sexo = @Sexo,
		                        dataNascimento = @dataNascimento,
		                        cpf = @cpf,
		                        rg = @rg,
		                        email = @email,
		                        telefone = @telefone,
		                        telefoneCelular = @telefoneCelular,
		                        enderecoRua = @enderecoRua,
		                        enderecoNumero = @enderecoNumero,
		                        enderecoBairro = @enderecoBairro,
		                        enderecoCidade = @enderecoCidade,
		                        enderecoCep = @enderecoCep,
		                        enderecoUf = @enderecoUf
                            WHERE CodLeitor = @CodLeitor";
    }
}
