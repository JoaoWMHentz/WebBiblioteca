using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BibliotecaApiDLL.itemAcervo
{
    public class ItemAcervo
    {
        public ItemAcervo(int codLivro, string tiTulo, string descricao, string numeroExemplar, string autor, string editora, string coleCao, string tipo, string seCao, int volume, int anoEdicAo, string idIoma, string statuS)
        {
            CodLivro = codLivro;
            TiTulo = tiTulo;
            Descricao = descricao;
            NumeroExemplar = numeroExemplar;
            Autor = autor;
            Editora = editora;
            ColeCao = coleCao;
            Tipo = tipo;
            SeCao = seCao;
            Volume = volume;
            AnoEdicAo = anoEdicAo;
            IdIoma = idIoma;
            StatuS = statuS;
        }

        public int CodLivro { get; set; }
        public string TiTulo { get; set; }
        public string Descricao { get; set; }
        public string NumeroExemplar { get; set; }
        public string Autor { get; set; }
        public string Editora { get; set; }
        public string ColeCao { get; set; }
        public string Tipo { get; set; }
        public string SeCao { get; set; }
        public int Volume { get; set; }
        public int AnoEdicAo { get; set; }
        public string IdIoma { get; set; }
        public string StatuS { get; set; }
    }
}
