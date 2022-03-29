
import { LeitorService } from './../../../Services/leitor.service';
import { Leitor } from './../../../Objects/Leitor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadLeitorModule } from './cad-leitor.module';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiRowSelection, GuiRowSelectionMode, GuiRowSelectionType, GuiSearching, GuiSelectedRow } from '@generic-ui/ngx-grid';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-cad-leitor',
  templateUrl: './cad-leitor.component.html',
  styleUrls: ['./cad-leitor.component.scss']
})


export class CadLeitorComponent implements OnInit {


  formulario: FormGroup;


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

  constructor(private formbuilder: FormBuilder, private leitorService: LeitorService) { }

  ngOnInit(): void {

    this.leitorService.GetLeitor(0).subscribe(leitores => {this.source = leitores; console.log(leitores)})


    this.formulario = this.formbuilder.group({
      codLeitor: [0],
      nome: [''],
      senha: [''],
      sexo: [''],
      dataNascimento: [''],
      cpf: [''],
      rg: [''],
      email: [''],
      telefone: [''],
      telefoneCelular: [''],
      enderecoRua: [''],
      enderecoNumero: [''],
      enderecoBairro: [''],
      enderecoCidade: [''],
      enderecoCep: [''],
      enderecoUF: ['']
    })
    UpdateActive();
  }

  onSelectedRows(rows: Array<GuiSelectedRow>): void {
    var Cod = rows.map((m: GuiSelectedRow) => m.source.codLeitor)[0];
    this.formulario.value.codLeitor = Cod;
    this.leitorService.GetLeitor(Cod).subscribe(leitores => {this.leitorToTb(leitores[0])})
  }

  salvarLeitor(leitor: Leitor){
    this.leitorService.PostLeitor(leitor).subscribe(
      () => {
        console.log("Sucess");
      },(erro: any) => {
        console.log("erro")
      }
    )
  }

  onSubmit(){
    var form =  this.formulario.value;
    this.salvarLeitor(new Leitor(form.codLeitor, form.nome, form.senha, form.sexo, form.dataNascimento, form.cpf, form.rg, form.email, form.telefone, form.telefoneCelular, form.enderecoRua, form.enderecoNumero, form.enderecoBairro, form.enderecoCidade, form.enderecoCep, form.enderecoUF))
    console.log(this.formulario.value)
    location.reload();
  }
  leitorToTb(leitor: Leitor){
  var form = this.formulario.value;

    this.formulario.patchValue(leitor);
  }
}



function UpdateActive(){
  document.getElementById('ACadleitor')?.classList.add('active');
  document.getElementById('ACadlivro')?.classList.remove('active');
  document.getElementById('ACadAutor')?.classList.remove('active');
  document.getElementById('ACadEditora')?.classList.remove('active');
  document.getElementById('AcadSecao')?.classList.remove('active');
  document.getElementById('AcadLocal')?.classList.remove('active');
  document.getElementById('AcadColecao')?.classList.remove('active');
  document.getElementById('AEmprestimo')?.classList.remove('active');
}
