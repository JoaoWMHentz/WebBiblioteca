namespace BibliotecaApiDLL.local
{
    public class Local
    {
        public Local(int codLoCal, string descricaoLocal)
        {
            CodLoCal = codLoCal;
            DescricaoLocal = descricaoLocal;
        }

        public int CodLoCal { get; set; }
        public string DescricaoLocal { get; set; }
    }
}
