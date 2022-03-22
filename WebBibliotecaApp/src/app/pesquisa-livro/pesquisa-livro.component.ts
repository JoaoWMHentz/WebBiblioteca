import { Livro } from 'src/Objects/livro';
import { LivroService } from './../../Services/livro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pesquisa-livro',
  templateUrl: './pesquisa-livro.component.html',
  styleUrls: ['./pesquisa-livro.component.scss']
})
export class PesquisaLivroComponent implements OnInit {
  constructor(private LivroService: LivroService) { }
  Livros: Livro[] = [];
  ngOnInit(): void {
    this.LivroService.GetLivro().subscribe(x => this.Livros = x);
    
    this.Livros.forEach(l => {
      console
      console.log(l);
    });
    
  }
  

}
