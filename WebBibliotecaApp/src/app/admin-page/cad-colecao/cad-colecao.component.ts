import { AppComponent } from 'src/app/app.component';
import { ColecaoService } from './../../../Services/colecao.service';
import { GuiPaging, GuiPagingDisplay, GuiSearching, GuiColumn, GuiRowSelectionType, GuiRowSelectionMode, GuiRowSelection, GuiSelectedRow } from '@generic-ui/ngx-grid';
import { Colecao } from './../../../Objects/Colecao';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  Language = AppComponent.localization;

  constructor(public AutorService: AutorService, public EditoraService: EditoraService, private formbuilder: FormBuilder, private colecaoService: ColecaoService) { }
  Cod: number;
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

  rowSelection: boolean | GuiRowSelection = {
    enabled: true,
    type: GuiRowSelectionType.CHECKBOX,
    mode: GuiRowSelectionMode.SINGLE,
  };
  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      codColecao: [0],
      nomeColecao: ['', Validators.required],
      autor: ['', Validators.required],
      editora: ['', Validators.required],
      anoLancamento: [0, Validators.required]
    })

    this.AutorService.GetAutor().subscribe(autores => {
      autores.forEach(autor => {UpdateOptionAutor(autor)})})
    this.EditoraService.GetEditora().subscribe(editoras => {
      editoras.forEach(editora => {UpdateOptionEditora(editora)})})

    UpdateActive();

    this.colecaoService.GetColecao(0).subscribe(colecao => {this.source = colecao; console.log(colecao)})
    UpdateActive();
  }
  SalvarLocal(colecao: Colecao){
    this.colecaoService.PostColecao(colecao).subscribe(
      () => {
        console.log("Sucess: " + colecao);
        location.reload();
      },(erro: any) => {
        console.log("Erro" + colecao);
      }
    )
  }

  onSelectedRows(rows: Array<GuiSelectedRow>): void {
    this.Cod = rows.map((m: GuiSelectedRow) => m.source.codColecao)[0];
    this.formulario.value.codLeitor = this.Cod;
    this.colecaoService.GetColecao(this.Cod).subscribe(leitores => {this.formulario.reset; this.formulario.patchValue(leitores[0])})
  }
  onSubmit(){
    var form =  this.formulario.value;
    this.SalvarLocal(new Colecao(this.Cod, form.nomeColecao, form.autor, form.editora, form.anoLancamento))
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
  document.getElementById('ACadleitor')?.classList.remove('active');
  document.getElementById('ACadlivro')?.classList.remove('active');
  document.getElementById('ACadAutor')?.classList.remove('active');
  document.getElementById('ACadEditora')?.classList.remove('active');
  document.getElementById('AcadSecao')?.classList.remove('active');
  document.getElementById('AcadLocal')?.classList.remove('active');
  document.getElementById('AcadColecao')?.classList.add('active');
  document.getElementById('AEmprestimo')?.classList.remove('active');
  document.getElementById('AConLeitor')?.classList.remove('active');
  document.getElementById('AConlivro')?.classList.remove('active');
  document.getElementById('AConEmprestimo')?.classList.remove('active');
  document.getElementById('AConEmprestimo')?.classList.remove('active');
}
