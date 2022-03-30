using BibliotecaApiDLL.leitor;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControllerLeitor
{
    [Route("api/conleitor")]
    public class ConleitorController: Controller
    {
        [HttpGet("{nome}/{cpf}/{rg}/{email}")]
        public List<Leitor> Get(string nome, string cpf, string rg, string email)
        {
            var Dao = new LeitorDao();
            return Dao.PesquisaLeitor(nome, cpf, rg, email);
        }
    }
}
