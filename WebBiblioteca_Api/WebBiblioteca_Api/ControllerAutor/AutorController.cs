using BibliotecaApiDLL.Autor;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControlerAutor
{
    [Route("api/cadautor")]
    public class AutorController: Controller
    {
            [HttpGet]
            public List<Autor> Get()
            {
                DaoAutor Dao = new DaoAutor();
                List<Autor> list = new List<Autor>();
                list = Dao.GetDados();
                return list;
            }
            [HttpPost]
            public void Create([FromBody] List<Autor> ListaAutores)
            {
                DaoAutor Dao = new DaoAutor();
                foreach (var Autor in ListaAutores)
                {
                    Dao.Salvar(Autor);
                }
            }
        }
    }

