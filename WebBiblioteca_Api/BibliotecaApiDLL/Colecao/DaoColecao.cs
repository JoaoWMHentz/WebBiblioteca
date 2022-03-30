using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BibliotecaApiDLL.Colecao
{
    public class DaoColecao
	{
		
        private string TableName => "MvtBIBColecao";
		private string InsertCommand => $@"INSERT INTO {TableName} (
										nomeColecao,
										codAutor,
										codEditora,
										anoLancamento) VALUES (@nomeColecao, 
										@codAutor, 
										@codEditora,
										@anoLancamento)";
		private string UpdateCommand => $@"UPDATE {TableName} SET 
										nomeColecao = @nomeColecao,
										codAutor = @codAutor,
										codEditora = @codEditora,
										anoLancamento = @anoLancamento
										WHERE codColecao = @codColecao";
		private string SelectCommand => $@"SELECT TOP (1000) codColecao,
										Colecao.nomeColecao,
										Autor.nomeAutor,
										Editora.nomeEditora,
										Colecao.anoLancamento
										FROM MvtBIBColecao as Colecao
										LEFT JOIN MvtBIBAutor as Autor on Autor.codAutor = Colecao.codAutor
										LEFT JOIN MvtBIBEditora as Editora on Editora.codEditora = Colecao.codEditora";
		public void Salvar(Colecao colecao)
		{
			using (var cmd = new SqlCommand())
			{
				if (colecao.CodColecao == 0)
                {
					cmd.CommandText = UpdateCommand;
					cmd.Parameters.AddWithValue("@codColecao", colecao.CodColecao);
                }
                else
                {
					cmd.CommandText = InsertCommand;
				}
				string autor = colecao.Autor.Split(new string[] { " - código " }, StringSplitOptions.None)[1];
				string editora = colecao.Editora.Split(new string[] { " - código " }, StringSplitOptions.None)[1];
				cmd.Parameters.AddWithValue("@nomeColecao", colecao.NomeColecao);
				cmd.Parameters.AddWithValue("@codAutor", autor);
				cmd.Parameters.AddWithValue("@codEditora", editora);
				cmd.Parameters.AddWithValue("@anoLancamento", colecao.AnoLancamento);
				using (var Con = new Conexao())
				{
					cmd.Connection = Con.Conectar();
					cmd.ExecuteNonQuery();
				}
			}
		}
		public List<Colecao> GetDados()
		{
			var List = new List<Colecao>();
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
		public Colecao ReaderToObject(SqlDataReader reader)
		{
			return new Colecao(
				Convert.ToInt32(reader["codColecao"]),
				Convert.ToString(reader["nomeColecao"]),
				Convert.ToString(reader["nomeAutor"]),
				Convert.ToString(reader["nomeEditora"]),
				Convert.ToInt32(reader["anoLancamento"])
				);
		}
	}
}
