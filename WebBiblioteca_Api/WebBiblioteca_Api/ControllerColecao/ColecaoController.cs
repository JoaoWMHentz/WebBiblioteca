﻿using BibliotecaApiDLL.Colecao;
using Microsoft.AspNetCore.Mvc;

namespace WebBiblioteca_Api.ControllerColecao
{
    [Route("api/cadcolecao")]
    public class ColecaoController
    {
        [HttpGet("{id}")]
        public List<Colecao> Get(int id)
        {
            DaoColecao Dao = new DaoColecao();
            var list = new List<Colecao>();
            list = Dao.GetDados(id);
            return list;
        }
        [HttpPost]
        public void Create([FromBody] Colecao colecao)
        {
            DaoColecao Dao = new DaoColecao();
            Dao.Salvar(colecao);
        }
    }
}
