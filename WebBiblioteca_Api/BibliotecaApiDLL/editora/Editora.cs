namespace BibliotecaApiDLL.editora
{
    public class Editora
    {
        public Editora(int codEditora, string nomeEditora, string descricaoEDitora)
        {
            CodEditora = codEditora;
            NomeEditora = nomeEditora;
            DescricaoEDitora = descricaoEDitora;
        }

        public int CodEditora { get; set; }
        public string NomeEditora { get; set; }
        public string DescricaoEDitora { get; set; }
    }
}
