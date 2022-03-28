using BibliotecaApiDLL.Colecao;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControllerColecao
{
    [Route("api/cadcolecao")]
    public class ColecaoController
    {
        [HttpGet]
        public List<Colecao> Get()
        {
            DaoColecao Dao = new DaoColecao();
            var list = new List<Colecao>();
            list = Dao.GetDados();
            return list;
        }
        [HttpPost]
        public void Create([FromBody] Colecao colecao)
        {
            DaoColecao Dao = new DaoColecao();
            Dao.Salvar(colecao);
        }
    }
}
