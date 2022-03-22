using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace BibliotecaApiDLL.itemAcervo
{
    public class DaoItemAcervo
    {
		private string TableName => "MvtBIBLeitor";
		private string InsertCommand => $@"INSERT INTO {TableName} (
											titulo, 
											descricao, 
											numeroExemplar, 
											codAutor, 
											codEditora, 
											codColecao, 
											codTipo, 
											codSecao, 
											volume, 
											anoEdicao, 
											idioma, 
											status
											) VALUES ( 
											@titulo, 
											@descricao, 
											@numeroExemplar, 
											@codAutor, 
											@codEditora, 
											@codColecao, 
											@codTipo, 
											@codSecao, 
											@volume, 
											@anoEdicao, 
											@idioma, 
											@status
											)";
		private string UpdateCommand => $@"UPDATE {TableName} SET 
											titulo = @titulo, 
											descricao = @descricao, 
											numeroExemplar = @numeroExemplar, 
											codAutor = @codAutor, 
											codEditora = @codEditora, 
											codColecao = @codColecao, 
											codTipo = @codTipo, 
											codSecao = @codSecao, 
											volume = @volume, 
											anoEdicao = @anoEdicao, 
											idioma = @idioma, 
											status = @status
											 WHERE xxxxxxxxxxxx";
		private string SelectCommand => $@"SELECT Livro.codLivro
												  ,Livro.titulo
												  ,Livro.descricao
												  ,Livro.numeroExemplar
												  ,Autor.nomeAutor
												  ,Editora.nomeEditora
												  ,Colecao.nomeColecao
												  ,Livro.Tipo
												  ,Secao.descricaoSecao
												  ,Livro.volume
												  ,Livro.anoEdicao
												  ,Livro.idioma
												  ,Livro.status
											  FROM MvtBIBItemAcervo As Livro 
											  INNER JOIN MvtBIBAutor as Autor on Livro.codAutor = Autor.codAutor 
											  INNER JOIN MvtBIBEditora as Editora on Livro.codEditora = Editora.codEditora 
											  INNER JOIN MvtBIBColecao as Colecao on Livro.codColecao = Colecao.codAutor 
											  INNER JOIN MvtBIBSecao as Secao on Livro.codSecao = Secao.codSecao";
		public void Salvar(ItemAcervo itemAcervo)
		{
			using (var cmd = new SqlCommand())
			{
				cmd.CommandText = InsertCommand;
				cmd.Parameters.AddWithValue("@titulo", itemAcervo.TiTulo);
				cmd.Parameters.AddWithValue("@descricao", itemAcervo.Descricao);
				cmd.Parameters.AddWithValue("@numeroExemplar", itemAcervo.NumeroExemplar);
				cmd.Parameters.AddWithValue("@nomeAutor", itemAcervo.Autor);
				cmd.Parameters.AddWithValue("@nomeEditora", itemAcervo.Editora);
				cmd.Parameters.AddWithValue("@nomeColecao", itemAcervo.ColeCao);
				cmd.Parameters.AddWithValue("@Tipo", itemAcervo.Tipo);
				cmd.Parameters.AddWithValue("@descricaoSecao", itemAcervo.SeCao);
				cmd.Parameters.AddWithValue("@volume", itemAcervo.Volume);
				cmd.Parameters.AddWithValue("@anoEdicao", itemAcervo.AnoEdicAo);
				cmd.Parameters.AddWithValue("@idioma", itemAcervo.IdIoma);
				cmd.Parameters.AddWithValue("@status", itemAcervo.StatuS);

				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					cmd.ExecuteNonQuery();
				}
			}
		}
		public List<ItemAcervo> GetDados()
		{
			var List = new List<ItemAcervo>();
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
		public ItemAcervo ReaderToObject(SqlDataReader reader)
		{
			return new ItemAcervo(
				Convert.ToInt32(reader["codLivro"]),
				Convert.ToString(reader["titulo"]),
				Convert.ToString(reader["descricao"]),
				Convert.ToString(reader["numeroExemplar"]),
				Convert.ToString(reader["nomeAutor"]),
				Convert.ToString(reader["nomeEditora"]),
				Convert.ToString(reader["nomeColecao"]),
				Convert.ToString(reader["Tipo"]),
				Convert.ToString(reader["descricaoSecao"]),
				Convert.ToInt32(reader["volume"]),
				Convert.ToInt32(reader["anoEdicao"]),
				Convert.ToString(reader["idioma"]),
				Convert.ToString(reader["status"])
				);
		}
	}
}
