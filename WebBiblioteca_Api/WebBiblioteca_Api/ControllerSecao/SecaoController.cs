using BibliotecaApiDLL.secao;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControllerSecao
{
    [Route("api/cadsecao")]
    public class SecaoController
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

