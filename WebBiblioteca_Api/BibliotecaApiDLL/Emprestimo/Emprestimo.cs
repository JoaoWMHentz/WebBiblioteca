using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BibliotecaApiDLL.Emprestimo
{
    public class Emprestimo
    {
        public Emprestimo(int codEmprestimo, string leitor, string cpfleitor, string livro, int exemplar, string dataEmprestimo, string dataDevolucao, string status)
        {
            CodEmprestimo = codEmprestimo;
            Leitor = leitor;
            Cpfleitor = cpfleitor;
            Livro = livro;
            Exemplar = exemplar;
            DataEmprestimo = dataEmprestimo;
            DataDevolucao = dataDevolucao;
            Status = status;
        }

        public int CodEmprestimo { get; set; }
        public string Leitor { get; set; }
        public string Cpfleitor { get; set; }
        public string Livro { get; set; }
        public int Exemplar { get; set; }
        public string DataEmprestimo { get; set; }
        public string DataDevolucao { get; set; }
        public string Status { get; set; }
    }
}
