namespace BibliotecaApiDLL.secao
{
    public class Secao
    {
        public Secao(int codSeCao, string descricaoSecao, string codLocal)
        {
            CodSecao = codSeCao;
            DescricaoSecao = descricaoSecao;
            DescricaoLocal = codLocal;
        }

        public int CodSecao { get; set; }
        public string DescricaoSecao { get; set; }
        public string DescricaoLocal { get; set; }
    }
}
