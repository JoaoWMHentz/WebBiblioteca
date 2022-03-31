using System;
using System.Collections.Generic;
using System.Data.SqlClient;

namespace BibliotecaApiDLL.secao
{
    public class DaoSecao
    {
		private string TableName => "MvtBIBSecao";

		private string InsertCommand => $@"INSERT INTO {TableName} (
										descricaoSecao, 
										codLocal
										) VALUES (
										@descricaoSecao, 
										@codLocal)";
		private string UpdateCommand => $@"UPDATE {TableName} SET 
										descricaoSecao = @descricaoSecao, 
										codLocal = @codLocal
										WHERE codSecao = @codSecao";

		private string SelectCommand => $@"SELECT Secao.codSecao,
										Secao.descricaoSecao,
										Local.descricaoLocal,
										Local.codLocal
										FROM MvtBIBSecao AS Secao
										LEFT JOIN MvtBIBLocal AS Local	
										ON Secao.codLocal = Local.codLocal";
		public void Salvar(Secao secao)
		{
			using (var cmd = new SqlCommand())
			{
				if (secao.CodSecao != 0)
                {
					cmd.CommandText = UpdateCommand;
					cmd.Parameters.AddWithValue("@codSecao", secao.CodSecao);
                }
                else
                {
					cmd.CommandText = InsertCommand;
				}
				string codlocal = secao.DescricaoLocal.Split(new string[] { " - código " }, StringSplitOptions.None)[1];
				cmd.Parameters.AddWithValue("@descricaoSecao", secao.DescricaoSecao) ;
				cmd.Parameters.AddWithValue("@codLocal", codlocal);
				
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
				(Convert.ToString(reader["descricaoLocal"]) + " - código " + Convert.ToString(reader["codLocal"]))
				);
		}
	}
}
