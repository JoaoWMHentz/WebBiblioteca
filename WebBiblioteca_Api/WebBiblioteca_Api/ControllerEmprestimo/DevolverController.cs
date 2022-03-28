using BibliotecaApiDLL.Emprestimo;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControllerEmprestimo
{
    [Route("api/devolver")]
    public class DevolverController
    {
        [HttpPost]
        public void Create([FromBody] int IdEmprestimo)
        {
            DaoEmprestimo Dao = new DaoEmprestimo();
            Dao.Devolver(IdEmprestimo);
        }
    }
}
