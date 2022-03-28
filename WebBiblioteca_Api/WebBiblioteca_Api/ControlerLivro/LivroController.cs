using BibliotecaApiDLL.itemAcervo;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControlerLivro
{
    [Route("api/cadlivro")]
    public class LivroController
    {
        [HttpGet]
        public List<ItemAcervo> Get()
        {
            DaoItemAcervo Dao = new DaoItemAcervo();
            return Dao.GetDados();
        }
        [HttpPost]
        public void Create([FromBody] ItemAcervo Object)
        {
            var Dao = new DaoItemAcervo();
               Dao.Salvar(Object);
        }
    }
}
