import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-local',
  templateUrl: './cad-local.component.html',
  styleUrls: ['./cad-local.component.scss']
})
export class CadLocalComponent implements OnInit {

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
  AcadSecaoActiva?.classList.remove('active');
  var AcadLocalActiva = document.getElementById('AcadLocal');
  AcadLocalActiva?.classList.add('active');
  var AcadSecapActive = document.getElementById('AcadColecao');
  AcadSecapActive?.classList.remove('active');

}
