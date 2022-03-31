using BibliotecaApiDLL.itemAcervo;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControlerLivro
{
    [Route("api/conlivro")]
    public class ConsultarLivroController
    {
        [HttpGet("{Titulo}/{Autor}/{Editora}/{Colecao}/{Secao}/{status}")]
        public List<ItemAcervo> Get(string Titulo, string Autor, string Editora, string Colecao, string Secao, string status)
        {
            DaoItemAcervo Dao = new DaoItemAcervo();
            return Dao.ProcurarItem(Titulo, Autor, Editora, Colecao, Secao, status);
        }
    }
}
