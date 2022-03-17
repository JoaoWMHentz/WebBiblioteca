namespace BibliotecaApiDLL.local
{
    public class Local
    {
        public Local(int codLoCal, int descricaoLocal)
        {
            CodLoCal = codLoCal;
            DescricaoLocal = descricaoLocal;
        }

        public int CodLoCal { get; set; }
        public int DescricaoLocal { get; set; }
    }
}
