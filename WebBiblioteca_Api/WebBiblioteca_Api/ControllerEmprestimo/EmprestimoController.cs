using BibliotecaApiDLL.Emprestimo;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControllerEmprestimo
{
    [Route("api/emprestimo")]
    public class EmprestimoController
    {
        [HttpGet]
        public List<Emprestimo> Get()
        {
            DaoEmprestimo Dao = new DaoEmprestimo();
            return Dao.GetDados();
        }
        [HttpPost]
        public void Create([FromBody] Emprestimo emprestimo)
        {
            DaoEmprestimo Dao = new DaoEmprestimo();
            Dao.Salvar(emprestimo);
        }
    }
}
