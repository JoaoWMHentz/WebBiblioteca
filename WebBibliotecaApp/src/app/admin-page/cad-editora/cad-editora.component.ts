import { AppComponent } from 'src/app/app.component';
import { EditoraService } from './../../../Services/editora.service';
import { GuiPaging, GuiPagingDisplay, GuiSearching, GuiColumn } from '@generic-ui/ngx-grid';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Editora } from './../../../Objects/Editora';
import { Component, OnInit } from '@angular/core';
import { CadEditoraModule } from './cad-editora.module';
import { EditTemplateFactory } from '@generic-ui/ngx-grid/composition/core/domain-read/edit/edit-template.factory';

@Component({
  selector: 'app-cad-editora',
  templateUrl: './cad-editora.component.html',
  styleUrls: ['./cad-editora.component.scss']
})
export class CadEditoraComponent implements OnInit {

  constructor(private formbuilder: FormBuilder,public editoraService: EditoraService) { }

  Language = AppComponent.localization;

  formulario: FormGroup;

  source: Array<Editora> = [];

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
      field: 'codEditora',
      width: 70
    },
    {
      header: 'Nome',
      field: 'nomeEditora',
      width: 150
    },
    {
      header: 'Descrição',
      field: 'descricaoEDitora',
      width: 300
    },

];

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      codEditora: [0],
      nome: [''],
      descricao: ['']
    })

    this.editoraService.GetEditora().subscribe(editoras => {this.source = editoras; console.log(editoras)})

    UpadateActive();
  }

  SalvarEditora(editora: Editora){
    this.editoraService.PostEditora(editora).subscribe(
      () => {
        console.log("Sucess");
      },(erro: any) => {
        console.log("Erro")
      }
    )
  }
  onSubmit(){
    var form =  this.formulario.value;
    this.SalvarEditora(new Editora(form.codEditoara, form.nome, form.descricao))
    console.log(this.formulario.value)


  }


}
function UpadateActive(){
    var CadLeitorActive = document.getElementById('ACadleitor');
    CadLeitorActive?.classList.remove('active');
    var CadLivroActive = document.getElementById('ACadlivro');
    CadLivroActive?.classList.remove('active');
    var ACadAutorActive = document.getElementById('ACadAutor');
    ACadAutorActive?.classList.remove('active');
    var ACadEditoraActive = document.getElementById('ACadEditora');
    ACadEditoraActive?.classList.add('active');
    var AcadSecaoActiva = document.getElementById('AcadSecao');
    AcadSecaoActiva?.classList.remove('active');
    var AcadLocalActiva = document.getElementById('AcadLocal');
    AcadLocalActiva?.classList.remove('active');
    var AcadSecapActive = document.getElementById('AcadColecao');
    AcadSecapActive?.classList.remove('active');
}
