using BibliotecaApiDLL.local;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControlerLocal
{
    [Route("api/cadlocal")]
    public class LocalController : Controller
    {
        [HttpGet]
        public List<Local> Get()
        {
            DaoLocal Dao = new DaoLocal();
            List<Local> list = new List<Local>();
            list = Dao.GetDados();
            return list;
        }
        [HttpPost]
        public void Create([FromBody] Local local)
        {
            DaoLocal Dao = new DaoLocal();
            
                Dao.Salvar(local);
            
        }
    }
}
