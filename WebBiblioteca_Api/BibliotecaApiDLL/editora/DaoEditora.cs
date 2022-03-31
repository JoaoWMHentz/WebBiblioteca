using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BibliotecaApiDLL.editora
{
    public class DaoEditora
    {
		private string TableName => "MvtBIBEditora";
		private string InsertCommand => $@"INSERT INTO {TableName} ( 
												nomeEditora, 
												descricaoEditora
											) VALUES ( 
												@nomeEditora, 
													@descricaoEditora
											)";
		private string UpdateCommand => $@"UPDATE {TableName} SET 
												nomeEditora = @nomeEditora, 
												descricaoEditora = @descricaoEditora
											WHERE codEditora = @codEditora";
		private string SelectCommand => $@"SELECT TOP (1000) [codEditora]
											  ,[nomeEditora]
											  ,[descricaoEditora]
										  FROM [MvtBIBEditora]";
		public void Salvar(Editora editora)
		{
			using (var cmd = new SqlCommand())
            {
				if(editora.CodEditora != 0)
                {
					cmd.CommandText = UpdateCommand;
					cmd.Parameters.AddWithValue("@codEditora", editora.CodEditora);
                }
                else
                {
					cmd.CommandText = InsertCommand;
				}

				cmd.Parameters.AddWithValue("@nomeEditora", editora.NomeEditora);
				cmd.Parameters.AddWithValue("@descricaoEditora", editora.DescricaoEDitora);
				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					cmd.ExecuteNonQuery();
				}
			}
		}
		public List<Editora> GetDados()
		{
			var List = new List<Editora>();
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
		public Editora ReaderToObject(SqlDataReader reader)
		{
			return new Editora(
				Convert.ToInt32(reader["codEditora"]),
				Convert.ToString(reader["nomeEditora"]),
				Convert.ToString(reader["descricaoEditora"])
				);
		}
	}
}
