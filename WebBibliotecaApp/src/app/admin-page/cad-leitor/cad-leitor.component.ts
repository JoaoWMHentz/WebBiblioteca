import { LeitorService } from './../../../Services/leitor.service';
import { Leitor } from './../../../Objects/Leitor';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadLeitorModule } from './cad-leitor.module';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiSearching } from '@generic-ui/ngx-grid';

@Component({
  selector: 'app-cad-leitor',
  templateUrl: './cad-leitor.component.html',
  styleUrls: ['./cad-leitor.component.scss']
})


export class CadLeitorComponent implements OnInit {

  formulario: FormGroup;

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
    },

];

  constructor(private formbuilder: FormBuilder, private leitorService: LeitorService) { }

  ngOnInit(): void {

    this.leitorService.GetLeitor().subscribe(leitores => {this.source = leitores; console.log(leitores)})


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
  }
}

function UpdateActive(){
  var CadLeitorActive = document.getElementById('ACadleitor');
      CadLeitorActive?.classList.add('active');
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
      AcadSecapActive?.classList.remove('active');
}
