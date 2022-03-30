import { ColecaoService } from './../../../Services/colecao.service';
import { Colecao } from 'src/Objects/Colecao';
import { Livro } from './../../../Objects/livro';
import { CadLivroModule } from './cad-livro.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditoraService } from './../../../Services/editora.service';
import { AutorService } from './../../../Services/autor.service';
import { Editora } from './../../../Objects/Editora';
import { Autor } from './../../../Objects/Autor';
import { Component, OnInit } from '@angular/core';
import { Secao } from 'src/Objects/Secao';
import { SecaoService } from 'src/Services/secao.service';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiRowSelection, GuiRowSelectionMode, GuiRowSelectionType, GuiSearching, GuiSelectedRow } from '@generic-ui/ngx-grid';
import { LivroService } from 'src/Services/livro.service';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cad-livro',
  templateUrl: './cad-livro.component.html',
  styleUrls: ['./cad-livro.component.scss']
})
export class CadLivroComponent implements OnInit {

  Language = AppComponent.localization;
  source: Array<Livro> = [];
  anoAtual = new Date().getFullYear();
  formulario: FormGroup;

  listaDeEditoras: string[];
  listaDeAutores: string[];
  listaDeColecao: string[];
  listaDeSecao: string[];

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
    rowSelection: boolean | GuiRowSelection = {
      enabled: true,
      type: GuiRowSelectionType.CHECKBOX,
      mode: GuiRowSelectionMode.SINGLE,
    };

  ngOnInit(): void {

    this.formulario = this.formbuilder.group({
    codLivro: [0],
    tiTulo :["", Validators.required],
    descricao :["",Validators.required],
    numeroExemplar :["",Validators.required],
    autor :["", Validators.required],
    editora :["", Validators.required],
    coleCao :["", Validators.required],
    tipo :["", Validators.required],
    seCao :["", Validators.required],
    volume :["", Validators.required],
    anoEdicAo :["", Validators.required],
    idIoma :["", Validators.required],
    statuS :["Disponível"]
    })


    this.AutorService.GetAutor().subscribe(autores => {
      autores.forEach(autor => {UpdateOptionAutor(autor)})})

    this.EditoraService.GetEditora().subscribe(editoras => {
      editoras.forEach(editora => {UpdateOptionEditora(editora)})})

    this.SecaoService.GetSecao().subscribe(secoes => {
      secoes.forEach(secao => {UpdateOptionSecao(secao)})})
      this.colecaoService.GetColecao().subscribe(colecoes => {
        colecoes.forEach(colecao => {UpdateOptionColecao(colecao)})})

    this.livroService.GetLivro(0).subscribe(livros => { this.source =livros})

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

    let livro: Livro = {...this.formulario.value};
    livro
    this.SalvarLivro(livro)
    console.log(this.formulario.value)
    location.reload();
  }
  onSelectedRows(rows: Array<GuiSelectedRow>): void {
    var Cod = rows.map((m: GuiSelectedRow) => m.source.codLivro)[0];
    this.livroService.GetLivro(Cod).subscribe(livros => {this.formulario.patchValue(livros[0])})
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
  document.getElementById('ACadleitor')?.classList.remove('active');
  document.getElementById('ACadlivro')?.classList.add('active');
  document.getElementById('ACadAutor')?.classList.remove('active');
  document.getElementById('ACadEditora')?.classList.remove('active');
  document.getElementById('AcadSecao')?.classList.remove('active');
  document.getElementById('AcadLocal')?.classList.remove('active');
  document.getElementById('AcadColecao')?.classList.remove('active');
  document.getElementById('AEmprestimo')?.classList.remove('active');
}
