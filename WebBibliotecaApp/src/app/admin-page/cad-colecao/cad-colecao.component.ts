import { Editora } from './../../../Objects/Editora';
import { EditoraService } from './../../../Services/editora.service';
import { AutorService } from 'src/Services/autor.service';
import { Autor } from './../../../Objects/Autor';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cad-colecao',
  templateUrl: './cad-colecao.component.html',
  styleUrls: ['./cad-colecao.component.scss']
})
export class CadColecaoComponent implements OnInit {

  constructor(public AutorService: AutorService, public EditoraService: EditoraService) { }

  ngOnInit(): void {
    this.AutorService.GetAutor().subscribe(autores => {
      autores.forEach(autor => {UpdateOptionAutor(autor)})})
    this.EditoraService.GetEditora().subscribe(editoras => {
      editoras.forEach(editora => {UpdateOptionEditora(editora)})})

    UpdateActive();
  }
}
function UpdateOptionAutor(Autor: Autor){
  var DataList = document.getElementById('DatalistAutor');
  var Option = document.createElement('option');
  Option.value = Autor.nome + " - " + Autor.codAutor;
  DataList?.appendChild(Option);
}
function UpdateOptionEditora(editora: Editora){
  var Datalist = document.getElementById('datalistEditora');
  var Option = document.createElement('option');
  Option.value = editora.nomeEditora + ' - ' + editora.codEditora;
  Datalist?.appendChild(Option);
}

function UpdateActive(){
  var CadLeitorActive = document.getElementById('ACadleitor');
     
      CadLeitorActive?.classList.remove('active');
    
    var CadLivroActive = document.getElementById('ACadlivro');
           CadLivroActive?.classList.remove('active');
    
    var ACadAutorActive = document.getElementById('ACadAutor');
     
      ACadAutorActive?.classList.remove('active');
    
    var ACadEditoraActive = document.getElementById('ACadEditora');
       
        ACadEditoraActive?.classList.remove('active');
    
    var AcadSecaoActiva = document.getElementById('AcadSecao');
     
      AcadSecaoActiva?.classList.remove('active');
    
    var AcadLocalActiva = document.getElementById('AcadLocal');
     
      AcadLocalActiva?.classList.remove('active');
    
    var AcadSecapActive = document.getElementById('AcadColecao');
     
      AcadSecapActive?.classList.add('active');
    
}
