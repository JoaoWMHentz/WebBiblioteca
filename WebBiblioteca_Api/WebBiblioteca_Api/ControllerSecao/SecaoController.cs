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
        [HttpPost("{cod}/{descricao}/{local}")]
        public void Create(int cod, string descricao, string local)
        {
            DaoSecao Dao = new DaoSecao();
            var secao = new Secao(cod, descricao, local);
            Dao.Salvar(secao);

        }
    }
}

