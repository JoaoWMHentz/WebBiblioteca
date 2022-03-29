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
    location.reload();
  }
}
function UpdateActive(){
  document.getElementById('ACadleitor')?.classList.remove('active');
  document.getElementById('ACadlivro')?.classList.remove('active');
  document.getElementById('ACadAutor')?.classList.add('active');
  document.getElementById('ACadEditora')?.classList.remove('active');
  document.getElementById('AcadSecao')?.classList.remove('active');
  document.getElementById('AcadLocal')?.classList.remove('active');
  document.getElementById('AcadColecao')?.classList.remove('active');
  document.getElementById('AEmprestimo')?.classList.remove('active');
}
