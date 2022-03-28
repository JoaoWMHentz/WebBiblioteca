import { GuiPaging, GuiSearching, GuiColumn, GuiPagingDisplay } from '@generic-ui/ngx-grid';
import { AutorService } from 'src/Services/autor.service';
import { Autor } from './../../../Objects/Autor';
import { CadAutorModule } from './cad-autor.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cad-autor',
  templateUrl: './cad-autor.component.html',
  styleUrls: ['./cad-autor.component.scss']
})
export class CadAutorComponent implements OnInit {

  Language = AppComponent.localization;

  formulario1: FormGroup;

  constructor(private formbuilder: FormBuilder, public AutorService: AutorService) { }

  source: Array<Autor> = [];

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
      field: 'codAutor',
      width: 70
    },
    {
      header: 'Nome',
      field: 'nome',
      width: 150
    },
    {
      header: 'Descrição',
      field: 'descricao',
      width: 300
    },

];

  ngOnInit(): void {

    this.AutorService.GetAutor().subscribe(autores => {this.source = autores; console.log(autores)})

    this.formulario1 = this.formbuilder.group({
      codAutor: [0],
      nome: [''],
      descricao: ['']
    })

    UpdateActive()
  }

  salvarAutor(autor: Autor){
    this.AutorService.PostAutor(autor).subscribe(
      () => {
        console.log("Sucess");
      },(erro: any) => {
        console.log("Erro")
      }
    )
  }

  onSubmit(){
    var form =  this.formulario1.value;
    this.salvarAutor(new Autor(form.codAutor, form.nome, form.descricao))
    console.log(this.formulario1.value)
  }
}
function UpdateActive(){
  var CadLeitorActive = document.getElementById('ACadleitor');
  CadLeitorActive?.classList.remove('active');
  var CadLivroActive = document.getElementById('ACadlivro');
    CadLivroActive?.classList.remove('active');
  var ACadAutorActive = document.getElementById('ACadAutor');
    ACadAutorActive?.classList.add('active');
  var ACadEditoraActive = document.getElementById('ACadEditora');
    ACadEditoraActive?.classList.remove('active');
  var AcadSecaoActiva = document.getElementById('AcadSecao');
    AcadSecaoActiva?.classList.remove('active');
  var AcadLocalActiva = document.getElementById('AcadLocal');
    AcadLocalActiva?.classList.remove('active');
  var AcadSecapActive = document.getElementById('AcadColecao');
    AcadSecapActive?.classList.remove('active');
}
