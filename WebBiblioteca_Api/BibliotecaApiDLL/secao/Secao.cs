namespace BibliotecaApiDLL.secao
{
    public class Secao
    {
        public Secao(int codSeCao, string descricaoSecao, string codLoCal)
        {
            CodSeCao = codSeCao;
            DescricaoSecao = descricaoSecao;
            CodLoCal = codLoCal;
        }

        public int CodSeCao { get; set; }
        public string DescricaoSecao { get; set; }
        public string CodLoCal { get; set; }
    }
}
