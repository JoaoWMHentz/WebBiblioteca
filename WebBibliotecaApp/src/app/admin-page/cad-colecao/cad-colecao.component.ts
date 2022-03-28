import { ColecaoService } from './../../../Services/colecao.service';
import { GuiPaging, GuiPagingDisplay, GuiSearching, GuiColumn } from '@generic-ui/ngx-grid';
import { Colecao } from './../../../Objects/Colecao';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Editora } from './../../../Objects/Editora';
import { EditoraService } from './../../../Services/editora.service';
import { AutorService } from 'src/Services/autor.service';
import { Autor } from './../../../Objects/Autor';
import { Component, OnInit } from '@angular/core';
import { CadColecaoModule } from './cad-colecao.module';

@Component({
  selector: 'app-cad-colecao',
  templateUrl: './cad-colecao.component.html',
  styleUrls: ['./cad-colecao.component.scss']
})
export class CadColecaoComponent implements OnInit {

  constructor(public AutorService: AutorService, public EditoraService: EditoraService, private formbuilder: FormBuilder, private colecaoService: ColecaoService) { }

  formulario: FormGroup;

  source: Array<Colecao> = [];

  paging: GuiPaging = {
		enabled: true,
		page: 1,
		pageSize: 5,
		pageSizes: [5,10, 25, 50],
		pagerTop: false,
		pagerBottom: true,
		display: GuiPagingDisplay.ADVANCED
	};
  searching: GuiSearching = {
		enabled: true,
		placeholder: 'Pesquisar...'
	};

  columns: Array<GuiColumn> = [
    {
      header: 'Código',
      field: 'codColecao',
      width: 70
    },
    {
      header: 'Nome',
      field: 'nomeColecao',
    },
    {
      header: 'Autor',
      field: 'autor',
    },
    {
      header: 'Editora',
      field: 'editora',
    }
  ];


  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      codColecao: [0],
      nomeColecao: [''],
      autor: [''],
      editora: [''],
      anoLancamento: [0]
    })

    this.AutorService.GetAutor().subscribe(autores => {
      autores.forEach(autor => {UpdateOptionAutor(autor)})})
    this.EditoraService.GetEditora().subscribe(editoras => {
      editoras.forEach(editora => {UpdateOptionEditora(editora)})})

    UpdateActive();

    this.colecaoService.GetColecao().subscribe(colecao => {this.source = colecao; console.log(colecao)})
    UpdateActive();
  }
  SalvarLocal(colecao: Colecao){
    this.colecaoService.PostColecao(colecao).subscribe(
      () => {
        console.log("Sucess: " + colecao);
      },(erro: any) => {
        console.log("Erro" + colecao);
      }
    )
  }
  onSubmit(){
    var form =  this.formulario.value;
    this.SalvarLocal(new Colecao(form.codColecao, form.nomeColecao, form.autor, form.editora, form.anoLancamento))
    console.log(this.formulario.value)
  }
}
function UpdateOptionAutor(Autor: Autor){
  var DataList = document.getElementById('DatalistAutor');
  var Option = document.createElement('option');
  Option.value = Autor.nome + " - código " + Autor.codAutor;
  DataList?.appendChild(Option);
}
function UpdateOptionEditora(editora: Editora){
  var Datalist = document.getElementById('datalistEditora');
  var Option = document.createElement('option');
  Option.value = editora.nomeEditora + ' - código ' + editora.codEditora;
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
