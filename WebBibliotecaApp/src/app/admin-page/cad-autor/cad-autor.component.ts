import { AutorService } from 'src/Services/autor.service';
import { Autor } from './../../../Objects/Autor';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cad-autor',
  templateUrl: './cad-autor.component.html',
  styleUrls: ['./cad-autor.component.scss']
})
export class CadAutorComponent implements OnInit {

  formulario1: FormGroup;

  constructor(private formbuilder: FormBuilder, public AutorService: AutorService) { }

  ngOnInit(): void {

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
