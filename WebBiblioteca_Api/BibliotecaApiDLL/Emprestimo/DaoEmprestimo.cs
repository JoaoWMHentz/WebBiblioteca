using BibliotecaApiDLL.itemAcervo;
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
		private string InsertCommand => $@"
										INSERT INTO MvtBIBEmprestimo (
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
                                        @status)
										

										UPDATE MvtBIBItemAcervo
										SET status = 'Emprestado'
										FROM MvtBIBItemAcervo AS Livro
										WHERE Livro.codLivro = @codLivro
";

        private string SelectCommand => $@"
                                        SELECT 
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
		private string DevolverCommand => $@"DECLARE @CodigoLivro INT
						UPDATE MvtBIBEmprestimo
						SET	status = 'Arquivado',
						@CodigoLivro = Empre.codLivro
						FROM MvtBIBEmprestimo as Empre
						WHERE codEmprestimo = @codEmprestimo
						UPDATE MvtBIBItemAcervo
						SET status = 'Disponível'
						FROM MvtBIBItemAcervo AS Livro
						WHERE Livro.codLivro = @CodigoLivro"; 
		public void Salvar(Emprestimo emprestimo)
		{
			using (var cmd = new SqlCommand())
			{
				cmd.CommandText = InsertCommand;
				cmd.Parameters.AddWithValue("@codLeitor", emprestimo.Leitor);
				cmd.Parameters.AddWithValue("@codLivro", emprestimo.Livro);
				cmd.Parameters.AddWithValue("@dataEmprestimo", emprestimo.DataEmprestimo);
				cmd.Parameters.AddWithValue("@dataDevolucao", emprestimo.DataDevolucao);
				cmd.Parameters.AddWithValue("@status", "Emprestado");
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
                    if (reader.HasRows)
                    {
						while (reader.Read())
						{
							List.Add(ReaderToObject(reader));
						}
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
		public List<ItemAcervo> GetLivro()
		{
			var List = new List<ItemAcervo>();
			using (var cmd = new SqlCommand())
			{
					cmd.CommandText = $@"SELECT Livro.codLivro
								,Livro.titulo,Livro.descricao,Livro.numeroExemplar,Autor.nomeAutor,Editora.nomeEditora,Colecao.nomeColecao,Livro.Tipo
								,Secao.descricaoSecao, Livro.volume, Livro.anoEdicao, Livro.idioma, Livro.status,Livro.codAutor,Livro.codEditora,Livro.codColecao,Livro.codSecao
							FROM MvtBIBItemAcervo As Livro 
							INNER JOIN MvtBIBAutor as Autor on Livro.codAutor = Autor.codAutor 
							INNER JOIN MvtBIBEditora as Editora on Livro.codEditora = Editora.codEditora 
							INNER JOIN MvtBIBColecao as Colecao on Livro.codColecao = Colecao.codColecao
							INNER JOIN MvtBIBSecao as Secao on Livro.codSecao = Secao.codSecao
							WHERE Livro.status = 'Disponível'
							";
				
				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					var reader = cmd.ExecuteReader();
					while (reader.Read())
					{
						List.Add(ReaderToLivro(reader));
					}
				}
			}
			return List;
		}
		public ItemAcervo ReaderToLivro(SqlDataReader reader)
		{
			return new ItemAcervo(
				Convert.ToInt32(reader["codLivro"]),
				Convert.ToString(reader["titulo"]),
				Convert.ToString(reader["descricao"]),
				Convert.ToString(reader["numeroExemplar"]),
				Convert.ToString(reader["nomeAutor"]) + " - código " + Convert.ToString(reader["codAutor"]),
				Convert.ToString(reader["nomeEditora"]) + " - código " + Convert.ToString(reader["codEditora"]),
				Convert.ToString(reader["nomeColecao"]) + " - código " + Convert.ToString(reader["codColecao"]),
				Convert.ToString(reader["Tipo"]),
				Convert.ToString(reader["descricaoSecao"]) + " - código " + Convert.ToString(reader["codSecao"]),
				Convert.ToInt32(reader["volume"]),
				Convert.ToInt32(reader["anoEdicao"]),
				Convert.ToString(reader["idioma"]),
				Convert.ToString(reader["status"])
				);
		}
	}
}
