import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-editora',
  templateUrl: './cad-editora.component.html',
  styleUrls: ['./cad-editora.component.scss']
})
export class CadEditoraComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var CadLeitorActive = document.getElementById('ACadleitor');
    if (CadLeitorActive != null){
      CadLeitorActive.classList.remove('active');
    }
    var CadLivroActive = document.getElementById('ACadlivro');
    if (CadLivroActive != null){
      CadLivroActive.classList.remove('active');
    }
    var ACadAutorActive = document.getElementById('ACadAutor');
    if (ACadAutorActive != null){
      ACadAutorActive.classList.remove('active');
    }
    var ACadEditoraActive = document.getElementById('ACadEditora');
    if (ACadEditoraActive != null){
      ACadEditoraActive.classList.add('active');
    }
    var AcadSecaoActiva = document.getElementById('AcadSecao');
    if (AcadSecaoActiva != null){
      AcadSecaoActiva.classList.remove('active');
    }
    var AcadLocalActiva = document.getElementById('AcadLocal');
    if (AcadLocalActiva != null){
      AcadLocalActiva.classList.remove('active');
    }
    var AcadSecapActive = document.getElementById('AcadColecao');
    if (AcadSecapActive != null){
      AcadSecapActive.classList.remove('active');
    }
  }

}
