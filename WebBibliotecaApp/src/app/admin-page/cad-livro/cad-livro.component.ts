import { CadLivroModule } from './cad-livro.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditoraService } from './../../../Services/editora.service';
import { AutorService } from './../../../Services/autor.service';
import { Editora } from './../../../Objects/Editora';
import { Autor } from './../../../Objects/Autor';
import { Component, OnInit } from '@angular/core';
import { Secao } from 'src/Objects/Secao';
import { SecaoService } from 'src/Services/secao.service';

@Component({
  selector: 'app-cad-livro',
  templateUrl: './cad-livro.component.html',
  styleUrls: ['./cad-livro.component.scss']
})
export class CadLivroComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formbuilder: FormBuilder, public AutorService: AutorService, public EditoraService: EditoraService, public SecaoService: SecaoService) { }

  ngOnInit(): void {

    this.formulario = this.formbuilder.group({
      CodLivro: [0],
      TiTulo: [''],
      Descricao: [''],
      NumeroExemplar: [''],
      Autor: [''],
      Editora: [''],
      ColeCao: [''],
      Tipo: [''],
      SeCao: [''],
      Volume: [''],
      AnoEdicAo: [''],
      IdIoma: [''],
      StatuS: ['']
    })

    this.AutorService.GetAutor().subscribe(autores => {
      autores.forEach(autor => {UpdateOptionAutor(autor)})})

    this.EditoraService.GetEditora().subscribe(editoras => {
      editoras.forEach(editora => {UpdateOptionEditora(editora)})})

    this.SecaoService.GetSecao().subscribe(secoes => {
      secoes.forEach(secao => {UpdateOptionSecao(secao)})})

    UpdateActive();
  }
}

function UpdateOptionColecao(Autor: Autor){
  var DataList = document.getElementById('DatalistColecao');
  var Option = document.createElement('option');
  Option.value = Autor.nome + " - código " + Autor.codAutor;
  DataList?.appendChild(Option);
}

function UpdateOptionAutor(Autor: Autor){
  var DataList = document.getElementById('DatalistAutor');
  var Option = document.createElement('option');
  Option.value = Autor.nome + " - código " + Autor.codAutor;
  DataList?.appendChild(Option);
}
function UpdateOptionEditora(editora: Editora){
  var Datalist = document.getElementById('DatalistEditora');
  var Option = document.createElement('option');
  Option.value = editora.nomeEditora + ' - código ' + editora.codEditora;
  Datalist?.appendChild(Option);
}
function UpdateOptionSecao(secao: Secao){
  var Datalist = document.getElementById('DatalistSecao');
  var Option = document.createElement('option');
  Option.value = secao.descricaoSecao + ' - ' + secao.descricaoLocal + ' - código ' + secao.codSecao;
  Datalist?.appendChild(Option);
}


function UpdateActive(){
  var CadLeitorActive = document.getElementById('ACadleitor');
      CadLeitorActive?.classList.remove('active');
    var CadLivroActive = document.getElementById('ACadlivro');
           CadLivroActive?.classList.add('active');
    var ACadAutorActive = document.getElementById('ACadAutor');
      ACadAutorActive?.classList.remove('active');
    var ACadEditoraActive = document.getElementById('ACadEditora');
        ACadEditoraActive?.classList.remove('active');
    var AcadSecaoActiva = document.getElementById('AcadSecao');
      AcadSecaoActiva?.classList.remove('active');
    var AcadLocalActiva = document.getElementById('AcadLocal');
      AcadLocalActiva?.classList.remove('active');
    var AcadSecapActive = document.getElementById('AcadColecao');
      AcadSecapActive?.classList.remove('active');

}
