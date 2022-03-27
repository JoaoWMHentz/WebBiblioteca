using BibliotecaApiDLL.leitor;
using Microsoft.AspNetCore.Mvc;


namespace WebBiblioteca_Api.ControlerLeitor
{
    [Route("api/cadleitor")]
    public class leitorControler : Controller
    {
        [HttpGet]
        public List<Leitor> Get()
        {
            LeitorDao Dao = new LeitorDao();
            List<Leitor> list = new List<Leitor>();
            list = Dao.GetDados();
            return list;
        }
        [HttpPost]
        public void Create([FromBody] Leitor leitor)
        {
            LeitorDao Dao = new LeitorDao();
                Dao.Salvar(leitor);
        }
    }
}
