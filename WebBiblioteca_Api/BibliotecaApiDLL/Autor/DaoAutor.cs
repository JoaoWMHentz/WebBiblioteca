using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace BibliotecaApiDLL.Autor
{
	public class DaoAutor
	{
		private string TableName => "MvtBIBAutor";
		private string InsertCommand => $@"INSERT INTO {TableName} (nomeAutor, descricaoAutor) VALUES (@nomeAutor, @descricaoAutor)";
		private string UpdateCommand => $@"UPDATE {TableName} SET  nomeAutor = @nomeAutor, descricaoAutor = @descricaoAutor  WHERE codAutor = @codAutor";
		private string SelectCommand => $@"SELECT TOP (1000) [codAutor]
										,[nomeAutor]
										,[descricaoAutor]
										FROM [MvtBIBAutor]";
		public void Salvar(Autor autor)
		{
			using (var cmd = new SqlCommand())
			{
				if (autor.CodAutor != 0)
                {
					cmd.CommandText = UpdateCommand;
					cmd.Parameters.AddWithValue("@codAutor", autor.CodAutor);
                }
                else
                {
				cmd.CommandText = InsertCommand;
                }
				cmd.Parameters.AddWithValue("@codAutor", autor.CodAutor);
				cmd.Parameters.AddWithValue("@nomeAutor", autor.Nome);
				cmd.Parameters.AddWithValue("@descricaoAutor", autor.Descricao);
				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					cmd.ExecuteNonQuery();
				}
			}
		}
		public List<Autor> GetDados() 
		{ 
			var List = new List<Autor>();
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
		public Autor ReaderToObject(SqlDataReader reader)
		{
			return new Autor(
				Convert.ToInt32(reader["codAutor"]),
				Convert.ToString(reader["nomeAutor"]),
				Convert.ToString(reader["descricaoAutor"])
				);
		}
	}
}
