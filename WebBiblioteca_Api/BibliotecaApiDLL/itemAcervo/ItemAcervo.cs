using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BibliotecaApiDLL.itemAcervo
{
    internal class ItemAcervo
    {
        public ItemAcervo(int codLivro, string tiTulo, string descricao, int numeroExemplar, int codAutor, int codEditora, int codColeCao, int codTipo, int codSeCao, int volume, int anoEdicAo, string idIoma, string statuS)
        {
            CodLivro = codLivro;
            TiTulo = tiTulo;
            Descricao = descricao;
            NumeroExemplar = numeroExemplar;
            CodAutor = codAutor;
            CodEditora = codEditora;
            CodColeCao = codColeCao;
            CodTipo = codTipo;
            CodSeCao = codSeCao;
            Volume = volume;
            AnoEdicAo = anoEdicAo;
            IdIoma = idIoma;
            StatuS = statuS;
        }

        public int CodLivro { get; set; }
        public string TiTulo { get; set; }
        public string Descricao { get; set; }
        public int NumeroExemplar { get; set; }
        public int CodAutor { get; set; }
        public int CodEditora { get; set; }
        public int CodColeCao { get; set; }
        public int CodTipo { get; set; }
        public int CodSeCao { get; set; }
        public int Volume { get; set; }
        public int AnoEdicAo { get; set; }
        public string IdIoma { get; set; }
        public string StatuS { get; set; }
    }
}
