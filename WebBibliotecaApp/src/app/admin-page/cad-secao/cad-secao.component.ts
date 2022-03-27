import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-secao',
  templateUrl: './cad-secao.component.html',
  styleUrls: ['./cad-secao.component.scss']
})
export class CadSecaoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    UpdateActive();
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
  AcadSecaoActiva?.classList.add('active');
  var AcadLocalActiva = document.getElementById('AcadLocal');
  AcadLocalActiva?.classList.remove('active');
  var AcadSecapActive = document.getElementById('AcadColecao');
  AcadSecapActive?.classList.remove('active');
}
