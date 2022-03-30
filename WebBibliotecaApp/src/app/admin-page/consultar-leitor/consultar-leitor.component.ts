
import { LeitorService } from './../../../Services/leitor.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Leitor } from 'src/Objects/Leitor';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiRowSelection, GuiRowSelectionMode, GuiRowSelectionType, GuiSearching } from '@generic-ui/ngx-grid';
import { ConsultarLeitorModule } from './consultar-leitor.module';

@Component({
  selector: 'app-consultar-leitor',
  templateUrl: './consultar-leitor.component.html',
  styleUrls: ['./consultar-leitor.component.scss']
})
export class ConsultarLeitorComponent implements OnInit {

  formulario: FormGroup
  constructor(private formbuilder: FormBuilder, private leitorService: LeitorService) { }

  Language = AppComponent.localization;

  source: Array<Leitor> = [];

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
      field: 'codLeitor',
      width: 70
    },
    {
      header: 'Nome',
      field: 'nome'
    },
    {
      header: 'Email',
      field: 'email'
    },
    {
      header: 'Cpf',
      field: 'cpf'
    },
    {
      header: 'Rg',
      field: 'rg'
    },
    {
      header: 'Telefone',
      field: 'telefone'
    },];
    rowSelection: boolean | GuiRowSelection = {
      enabled: true,
      type: GuiRowSelectionType.CHECKBOX,
      mode: GuiRowSelectionMode.SINGLE,
    };
  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      nome: ['0'],
      cpf: ['0'],
      rg: ['0'],
      email: ['0']
    });
  }
  onSubmit(){
    var form = this.formulario.value
    this.leitorService.ConsultaLeitor(form.nome, form.cpf, form.rg, form.email).subscribe(leitores => {this.source = leitores; console.log(leitores)})
  }
}
