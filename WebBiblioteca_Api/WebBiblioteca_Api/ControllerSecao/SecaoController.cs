using Microsoft.AspNetCore.Mvc;
using BibliotecaApiDLL.secao;

namespace WebBiblioteca_Api.ControllerSecao
{
    [Route("api/cadsecao")]
    public class SecaoController : Controller
    {
        [HttpGet]
        public List<Secao> Get()
        {
            DaoSecao Dao = new();
            return Dao.GetDados();
        }
        [HttpPost]
        public void Create([FromBody] List<Secao> ListaSecao)
        {
            DaoSecao Dao = new DaoSecao();
            foreach (var Secao in ListaSecao)
            {
                Dao.Salvar(Secao);
            }
        }
    }
}
