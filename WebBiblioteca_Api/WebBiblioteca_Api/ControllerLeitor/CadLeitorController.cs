using BibliotecaApiDLL.leitor;
using Microsoft.AspNetCore.Mvc;


namespace WebBiblioteca_Api.ControlerLeitor
{
    [Route("api/cadleitor")]
    public class leitorControler : Controller
    {
        [HttpGet("{id}")]
        public List<Leitor> Get(int id)
        {
            LeitorDao Dao = new LeitorDao();
            List<Leitor> list = new List<Leitor>();
            list = Dao.GetDados(id);
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
