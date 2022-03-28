using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BibliotecaApiDLL.Emprestimo
{
    public class DaoEmprestimo
    {

        private string TableName => "MvtBIBEmprestimo";
		private string InsertCommand => $@"INSERT INTO {TableName} (
                                        codLeitor,
                                        codLivro,
                                        dataEmprestimo,
                                        dataDevolucao,
                                        status) VALUES
                                        (
                                        @codLeitor,
                                        @codLivro,
                                        @dataEmprestimo,
                                        @dataDevolucao,
                                        @status)";

        private string SelectCommand => $@"
                                        SELECT TOP (1000) 
	                                        codEmprestimo,
	                                        Leitor.nome AS 'nomeLeitor',
	                                        Leitor.cpf,
	                                        Livro.titulo,
	                                        Livro.numeroExemplar,
	                                        Emprestimo.dataEmprestimo,
	                                        Emprestimo.dataDevolucao,
	                                        Emprestimo.status
                                        FROM MvtBIBEmprestimo AS Emprestimo
                                        LEFT JOIN MvtBIBLeitor AS Leitor
	                                        ON Leitor.CodLeitor = Emprestimo.codLeitor
                                        LEFT JOIN MvtBIBItemAcervo AS Livro 
	                                        ON Livro.codLivro = Emprestimo.codLivro
										WHERE Emprestimo.status = 'Emprestado'";
		private string DevolverCommand => $@"UPDATE {TableName}
										   SET [status] = 'Disponível'
											WHERE CodEmprestimo = @CodEmprestimo";
		public void Salvar(Emprestimo emprestimo)
		{
			using (var cmd = new SqlCommand())
			{
				cmd.CommandText = InsertCommand;
				cmd.Parameters.AddWithValue("@codLeitor", emprestimo.Leitor);
				cmd.Parameters.AddWithValue("@codLivro", emprestimo.Livro);
				cmd.Parameters.AddWithValue("@dataEmprestimo", emprestimo.DataEmprestimo);
				cmd.Parameters.AddWithValue("@dataDevolucao", emprestimo.DataDevolucao);
				cmd.Parameters.AddWithValue("@status", emprestimo.Status);
				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					cmd.ExecuteNonQuery();
				}
			}
		}
		public List<Emprestimo> GetDados()
		{
			var List = new List<Emprestimo>();
			using (var cmd = new SqlCommand())
			{
				cmd.CommandText = SelectCommand;
				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					var reader = cmd.ExecuteReader();
					while (reader.Read())
					{
						List.Add(ReaderToObject(reader));
					}
				}
			}
			return List;
		}
		public Emprestimo ReaderToObject(SqlDataReader reader)
		{
			return new Emprestimo(
				Convert.ToInt32(reader["codEmprestimo"]),
				Convert.ToString(reader["nomeLeitor"]),
				Convert.ToString(reader["cpf"]),
				Convert.ToString(reader["titulo"]),
				Convert.ToInt32(reader["numeroExemplar"]),
				(Convert.ToDateTime(reader["dataEmprestimo"])).ToString("dd/MM/yyyy"),
				(Convert.ToDateTime(reader["dataDevolucao"])).ToString("dd/MM/yyyy"),
				Convert.ToString(reader["status"])
				);
		}
		public void Devolver(int IdEmprestimo)
		{
			using (var cmd = new SqlCommand())
			{
				cmd.CommandText = DevolverCommand;
				cmd.Parameters.AddWithValue("@codEmprestimo", IdEmprestimo);
				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					cmd.ExecuteNonQuery();
				}
			}
		}
	}
}
