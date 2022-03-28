import { ColecaoService } from './../../../Services/colecao.service';
import { Colecao } from 'src/Objects/Colecao';
import { Livro } from './../../../Objects/livro';
import { CadLivroModule } from './cad-livro.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditoraService } from './../../../Services/editora.service';
import { AutorService } from './../../../Services/autor.service';
import { Editora } from './../../../Objects/Editora';
import { Autor } from './../../../Objects/Autor';
import { Component, OnInit } from '@angular/core';
import { Secao } from 'src/Objects/Secao';
import { SecaoService } from 'src/Services/secao.service';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiSearching } from '@generic-ui/ngx-grid';
import { LivroService } from 'src/Services/livro.service';

@Component({
  selector: 'app-cad-livro',
  templateUrl: './cad-livro.component.html',
  styleUrls: ['./cad-livro.component.scss']
})
export class CadLivroComponent implements OnInit {

  source: Array<Livro> = [];

  formulario: FormGroup;

  constructor(private formbuilder: FormBuilder, public AutorService: AutorService, public EditoraService: EditoraService, public SecaoService: SecaoService, public livroService: LivroService,public colecaoService: ColecaoService) { }



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
        field: 'codLivro',
        width: 70
      },
      {
        header: 'Titulo',
        field: 'tiTulo',
      },
      {
        header: 'Descrição',
        field: 'descricao',
      },
      {
        header: 'Exemplar',
        field: 'numeroExemplar',
        width: 75
      },
      {
        header: 'Autor',
        field: 'autor',
      },
      {
        header: 'Editora',
        field: 'editora',
      },
      {
        header: 'Coleção',
        field: 'coleCao',
      },
    ];

  ngOnInit(): void {

    this.formulario = this.formbuilder.group({
      CodLivro: [0],
      Titulo: [''],
      Descricao: [''],
      NumeroExemplar: [''],
      Autor: [''],
      Editora: [''],
      Colecao: [''],
      Tipo: [''],
      Secao: [''],
      Volume: [''],
      AnoEdicao: [''],
      Idioma: [''],
      Status: ['Disponível']
    })


    this.AutorService.GetAutor().subscribe(autores => {
      autores.forEach(autor => {UpdateOptionAutor(autor)})})

    this.EditoraService.GetEditora().subscribe(editoras => {
      editoras.forEach(editora => {UpdateOptionEditora(editora)})})

    this.SecaoService.GetSecao().subscribe(secoes => {
      secoes.forEach(secao => {UpdateOptionSecao(secao)})})
      this.colecaoService.GetColecao().subscribe(colecoes => {
        colecoes.forEach(colecao => {UpdateOptionColecao(colecao)})})

    this.livroService.GetLivro().subscribe(livros => { this.source =livros})

    UpdateActive();
  }
  SalvarLivro(livro: Livro){
    this.livroService.PostLivro(livro).subscribe(
      () => {
        console.log("Sucess: " + livro);
      },(erro: any) => {
        console.log("Erro" + livro);
      }
    )
  }
  onSubmit(){
    var form =  this.formulario.value;
    this.SalvarLivro(new Livro(form.CodLivro, form.Titulo, form.Descricao, form.NumeroExemplar, form.Autor, form.Editora, form.Colecao, form.Tipo, form.Secao, form.Volume, form.AnoEdicao, form.Idioma, form.Status))
    console.log(this.formulario.value)
  }
}

function UpdateOptionColecao(colecao: Colecao){
  var DataList = document.getElementById('DatalistColecao');
  var Option = document.createElement('option');
  Option.value = colecao.nomeColecao + " - código " + colecao.codColecao;
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
