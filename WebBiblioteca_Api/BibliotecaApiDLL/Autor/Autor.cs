namespace BibliotecaApiDLL.Autor
{
    public class Autor
    {
        public Autor(int codAutor, string nome, string descricao)
        {
            CodAutor = codAutor;
            Nome = nome;
            Descricao = descricao;
        }

        public int CodAutor { get ; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
    }
}
