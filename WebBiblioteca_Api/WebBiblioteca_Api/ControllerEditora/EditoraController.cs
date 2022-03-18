using BibliotecaApiDLL.editora;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControlerEditora
{
    [Route("api/cadeditora")]
    public class EditoraController : Controller
    {
        [HttpGet]
        public List<Editora> Get()
        {
            DaoEditora Dao = new DaoEditora();
            List<Editora> list = new List<Editora>();
            list = Dao.GetDados();
            return list;
        }
        [HttpPost]
        public void Create([FromBody] List<Editora> ListaAutores)
        {
            DaoEditora Dao = new DaoEditora();
            foreach (var Autor in ListaAutores)
            {
                Dao.Salvar(Autor);
            }
        }
    }
}
