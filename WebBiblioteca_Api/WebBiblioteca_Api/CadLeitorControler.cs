using BibliotecaApiDLL.leitor;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace WebBiblioteca_Api
{
    [Route("admin/cadleitor")]
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
        public void Create([FromBody] List<Leitor> listaLeitores)
        {
            LeitorDao Dao = new LeitorDao();
            foreach (var leitor in listaLeitores)
            {
                Dao.Salvar(leitor);
            }
        }
    }
}
