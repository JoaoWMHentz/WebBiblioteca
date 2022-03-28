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
        public void Create([FromBody] Secao secao)
        {
            DaoSecao Dao = new DaoSecao();
            Dao.Salvar(secao);
            
        }
    }
}
