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
        public void Create([FromBody] List<ItemAcervo> Lista)
        {
            var Dao = new DaoItemAcervo();
            foreach (var Object in Lista)
            {
                Dao.Salvar(Object);
            }
        }
    }
}
