using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BibliotecaApiDLL.Colecao
{
    public class Colecao
    {
        public Colecao(int codColecao, string nomeColecao, string autor, string editora, int anoLancamento)
        {
            CodColecao = codColecao;
            NomeColecao = nomeColecao;
            Autor = autor;
            Editora = editora;
            AnoLancamento = anoLancamento;
        }

        public int CodColecao { get; set; }
        public string NomeColecao { get; set; }
        public string Autor { get; set; }
        public string Editora { get; set; }
        public int AnoLancamento { get; set; }


        
    }
}
