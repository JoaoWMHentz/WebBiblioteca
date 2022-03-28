import { Local } from './../../../Objects/local';
import { GuiPaging, GuiPagingDisplay, GuiSearching, GuiColumn } from '@generic-ui/ngx-grid';
import { LocalService } from './../../../Services/local.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadLocalModule } from './cad-local.module';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cad-local',
  templateUrl: './cad-local.component.html',
  styleUrls: ['./cad-local.component.scss']
})
export class CadLocalComponent implements OnInit {

  constructor(private formbuilder: FormBuilder ,public localService :LocalService ) { }

  Language = AppComponent.localization;

  source: Array<Local> = [];

  formulario: FormGroup;

  paging: GuiPaging = {
		enabled: true,
		page: 1,
		pageSize: 5,
		pageSizes: [5 ,10, 25, 50],
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
      field: 'codLoCal',
      width: 70
    },
    {
      header: 'Descrição',
      field: 'descricaoLocal',
      width: 300
    },

];

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      codLocal: [0],
      descricao: ['']
    })
    this.localService.GetLocal().subscribe(locais => {this.source = locais; console.log(locais)})
    UpdateActive();
  }

  SalvarLocal(local: Local){
    this.localService.PostLocal(local).subscribe(
      () => {
        console.log("Sucess: " + local);
      },(erro: any) => {
        console.log("Erro" + local);
      }
    )
  }
  onSubmit(){
    var form =  this.formulario.value;
    this.SalvarLocal(new Local(form.codLocal, form.descricao))
    console.log(this.formulario.value)
  }
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
  AcadLocalActiva?.classList.add('active');
  var AcadSecapActive = document.getElementById('AcadColecao');
  AcadSecapActive?.classList.remove('active');
}
