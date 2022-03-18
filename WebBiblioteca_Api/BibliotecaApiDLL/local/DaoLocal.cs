using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace BibliotecaApiDLL.local
{
    public class DaoLocal
    {
		private string TableName => "MvtBIBLeitor";
		private string InsertCommand => $@"INSERT INTO {TableName} ( 
											descricaoLocal
											) VALUES (
											@descricaoLocal
											)";
		private string UpdateCommand => $@"UPDATE {TableName} SET, 
										descricaoLocal = @descricaoLocal
										 WHERE xxxxxxxxxxxx";
		private string SelectCommand => $@"SELECT [codLocal]
											  ,[descricaoLocal]
										  FROM [MvtBiblioteca].[dbo].[MvtBIBLocal]";
		public void Salvar(Local local)
		{
			using (var cmd = new SqlCommand())
			{
				cmd.CommandText = InsertCommand;
				cmd.Parameters.AddWithValue("@descricaoLocal", local.DescricaoLocal);

				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					cmd.ExecuteNonQuery();
				}
			}
		}
		public List<Local> GetDados()
		{
			var List = new List<Local>();
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
		public Local ReaderToObject(SqlDataReader reader)
		{
			return new Local(
				Convert.ToInt32(reader["codLocal"]),
				Convert.ToString(reader["descricaoLocal"])
				);
		}
	}
}
