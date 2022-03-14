﻿using System;
using System.Data.SqlClient;

namespace BibliotecaApiDLL
{
    public class Conexao : IDisposable, IConexao
    {
        private SqlConnection Con = new SqlConnection();
        //Construtor
        public Conexao()
        {
            Con.ConnectionString = @"Data Source=MVTRENAN\SQLEXPRESS01;Initial Catalog=MvtBiblioteca;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
            //conexao.ConnectionString = @"Data Source=DESKTOP-G8SFLJ2\SQLEXPRESS;Initial Catalog=MvtBiblioteca;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False";
        }

        // conectar
        public SqlConnection Conectar()
        {
            if (Con.State == System.Data.ConnectionState.Closed)
            {
                Con.Open();
            }
            return Con;
        }

        // Desconectar

        public void Desconectar()
        {
            if (Con.State == System.Data.ConnectionState.Open)
            {
                Con.Close();
            }
        }

        public void Dispose()
        {
            Desconectar();
        }
    }
}
