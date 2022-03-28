using BibliotecaApiDLL.itemAcervo;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControlerLivro
{
    [Route("api/cadlivro")]
    public class LivroController
    {
        [HttpGet("{id}")]
        public List<ItemAcervo> Get(int id)
        {
            DaoItemAcervo Dao = new DaoItemAcervo();
            return Dao.GetDados(id);
        }
        [HttpPost]
        public void Create([FromBody] ItemAcervo Object)
        {
            var Dao = new DaoItemAcervo();
               Dao.Salvar(Object);
        }
    }
}
