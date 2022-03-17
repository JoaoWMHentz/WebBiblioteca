using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace BibliotecaApiDLL.itemAcervo
{
    internal class DaoItemAcervo
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
		private string SelectCommand => $@"SELECT TOP (1000) [codLivro]
										  ,[titulo]
										  ,[descricao]
										  ,[numeroExemplar]
										  ,[codAutor]
										  ,[codEditora]
										  ,[codColecao]
										  ,[codTipo]
										  ,[codSecao]
										  ,[volume]
										  ,[anoEdicao]
										  ,[idioma]
										  ,[status]
									  FROM [MvtBIBItemAcervo]";
		public void Salvar(ItemAcervo itemAcervo)
		{
			using (var cmd = new SqlCommand())
			{
				cmd.CommandText = InsertCommand;
				cmd.Parameters.AddWithValue("@titulo", itemAcervo.TiTulo);
				cmd.Parameters.AddWithValue("@descricao", itemAcervo.Descricao);
				cmd.Parameters.AddWithValue("@numeroExemplar", itemAcervo.NumeroExemplar);
				cmd.Parameters.AddWithValue("@codAutor", itemAcervo.CodAutor);
				cmd.Parameters.AddWithValue("@codEditora", itemAcervo.CodEditora);
				cmd.Parameters.AddWithValue("@codColecao", itemAcervo.CodColeCao);
				cmd.Parameters.AddWithValue("@codTipo", itemAcervo.CodTipo);
				cmd.Parameters.AddWithValue("@codSecao", itemAcervo.CodSeCao);
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
				Convert.ToInt32(reader["numeroExemplar"]),
				Convert.ToInt32(reader["codAutor"]),
				Convert.ToInt32(reader["codEditora"]),
				Convert.ToInt32(reader["codColecao"]),
				Convert.ToInt32(reader["codTipo"]),
				Convert.ToInt32(reader["codSecao"]),
				Convert.ToInt32(reader["volume"]),
				Convert.ToInt32(reader["anoEdicao"]),
				Convert.ToString(reader["idioma"]),
				Convert.ToString(reader["status"])
				);
		}
	}
}
