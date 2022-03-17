using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BibliotecaApiDLL.Autor
{
	public class DaoAutor
	{
		private string TableName => "MvtBIBLeitor";
		private string InsertCommand => $@"INSERT INTO {TableName} (codAutor, nomeAutor, descricaoAutor, ) VALUES (@codAutor, @nomeAutor, @descricaoAutor, )";
		private string UpdateCommand => $@"UPDATE {TableName} SET codAutor = @codAutor, nomeAutor = @nomeAutor, descricaoAutor = @descricaoAutor,  WHERE xxxxxxxxxxxx";
		private string SelectCommand => $@"";
		public void Salvar(Autor autor)
		{
			using (var cmd = new SqlCommand())
				cmd.CommandText = InsertCommand;
			cmd.Parameters.AddWithValue("@codAutor", autor.CodAutor);
			cmd.Parameters.AddWithValue("@nomeAutor", autor.Nome);
			cmd.Parameters.AddWithValue("@descricaoAutor", autor.Descricao);

			using (var Con = new Conexao())
			{
				cmd.Connection = Con.Conectar();
				cmd.ExecuteNonQuery();
			}
			public List<Autor> GetDados()
		var List = new List<Autor>();
			using (var cmd = new SqlCommand()
			)
			{
				cmd.CommandText = SelectCommand;
				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					var reader = cmd.ExecuteReader();
					while (reader.Read())
					{
						List.Add(ReaderToObgect(reader));
					}
				}
			}
			return List;
		}
		public Autor ReaderToObgect(SqlDataReader reader)
		{
			return new Autor(
				Convert.ToInt32(reader["codAutor"]),
				Convert.ToString(reader["nomeAutor"]),
				Convert.ToString(reader["descricaoAutor"])
				);
		}
	}
}
