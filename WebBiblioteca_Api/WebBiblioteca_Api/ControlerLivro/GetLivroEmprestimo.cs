using BibliotecaApiDLL.Emprestimo;
using BibliotecaApiDLL.itemAcervo;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControlerLivro
{
    [Route("api/emprestimo/getlivro")]
    public class GetLivroEmprestimo
    {
        [HttpGet]
        public List<ItemAcervo> Get(int id)
        {
            var Dao = new DaoEmprestimo();
            return Dao.GetLivro();
        }
    }
}
