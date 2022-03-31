using BibliotecaApiDLL.Emprestimo;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControllerEmprestimo
{
    [Route("api/conemprestimo")]
    public class ConEmprestimoController: Controller
    {
        [HttpGet("{status}/{livro}/{leitor}/{dataemprestimo}/{datadevolucao}")]
        public List<Emprestimo> Get(string status, string livro, string leitor, string dataemprestimo, string datadevolucao)
        {
            DaoEmprestimo Dao = new DaoEmprestimo();
            return Dao.ConsultaEmprestimo(status, livro, leitor, dataemprestimo, datadevolucao);
        }
    }
}
