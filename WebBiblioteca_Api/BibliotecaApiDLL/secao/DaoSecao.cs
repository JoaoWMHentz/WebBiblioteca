using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace BibliotecaApiDLL.secao
{
    internal class DaoSecao
    {
		private string TableName => "MvtBIBLeitor";
		private string InsertCommand => $@"INSERT INTO {TableName} (codSecao, 
										descricaoSecao, 
										codLocal, 
										) VALUES (@codSecao, 
										@descricaoSecao, 
										@codLocal, 
)";
		private string UpdateCommand => $@"UPDATE {TableName} SET codSecao = @codSecao, 
										descricaoSecao = @descricaoSecao, 
										codLocal = @codLocal, 
										 WHERE xxxxxxxxxxxx";
		private string SelectCommand => $@"SELECT TOP (1000) [codSecao]
											  ,[descricaoSecao]
											  ,[codLocal]
										  FROM [MvtBIBSecao]";
		public void Salvar(Secao secao)
		{
			using (var cmd = new SqlCommand())
			{
				cmd.CommandText = InsertCommand;
				cmd.Parameters.AddWithValue("@codSecao", secao.CodSeCao);
				cmd.Parameters.AddWithValue("@descricaoSecao", secao.DescricaoSecao);
				cmd.Parameters.AddWithValue("@codLocal", secao.CodLoCal);

				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					cmd.ExecuteNonQuery();
				}
			}
		}
		public List<Secao> GetDados()
		{
			var List = new List<Secao>();
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
		public Secao ReaderToObject(SqlDataReader reader)
		{
			return new Secao(
				Convert.ToInt32(reader["codSecao"]),
				Convert.ToString(reader["descricaoSecao"]),
				Convert.ToString(reader["codLocal"])
				);
		}
	}
}
