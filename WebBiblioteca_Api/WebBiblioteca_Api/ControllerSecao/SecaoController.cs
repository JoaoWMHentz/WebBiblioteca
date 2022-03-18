using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControllerSecao
{
    public class SecaoController : Controller
    {
        [HttpGet]
        public List<Secao> Get()
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
