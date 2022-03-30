using BibliotecaApiDLL.Emprestimo;
using BibliotecaApiDLL.itemAcervo;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControlerLivro
{
    [Route("api/getlivro")]
    public class GetLivroEmprestimo: Controller
    {
        [HttpGet]
        public List<ItemAcervo> Get()
        {
            var Dao = new DaoEmprestimo();
            return Dao.GetLivro();
        }
    }
}
