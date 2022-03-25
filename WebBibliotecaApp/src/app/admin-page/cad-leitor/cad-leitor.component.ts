import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CadLeitorModule } from './cad-leitor.module';

@Component({
  selector: 'app-cad-leitor',
  templateUrl: './cad-leitor.component.html',
  styleUrls: ['./cad-leitor.component.scss']
})

export class CadLeitorComponent implements OnInit {


  formulario: FormGroup;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      Nome: [null],
      Senha: [null],
      Email: [null],
      Sexo: [null],
      DataNascimento: [null],
      Cpf: [null],
      Rg: [null],
      Telefone: [null],
      Celular: [null],
      Rua: [null],
      Numero: [null],
      Bairro: [null],
      Cidade: [null],
      Cep: [null]
    })
    UpdateActive();
  }
  onSubmit(){
    console.log(this.formulario.value);
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