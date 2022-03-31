import { Local } from './../../../Objects/local';
import { GuiPaging, GuiPagingDisplay, GuiSearching, GuiColumn, GuiRowSelection, GuiRowSelectionType, GuiRowSelectionMode, GuiSelectedRow } from '@generic-ui/ngx-grid';
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

  constructor(private formbuilder: FormBuilder, public localService: LocalService) { }

  Language = AppComponent.localization;

  source: Array<Local> = [];

  formulario: FormGroup;

  paging: GuiPaging = {
    enabled: true,
    page: 1,
    pageSize: 5,
    pageSizes: [5, 10, 25, 50],
    pagerTop: false,
    pagerBottom: true,
    display: GuiPagingDisplay.ADVANCED
  };
  searching: GuiSearching = {
    enabled: true,
    placeholder: 'Pesquisar...'
  };
  rowSelection: boolean | GuiRowSelection = {
    enabled: true,
    type: GuiRowSelectionType.CHECKBOX,
    mode: GuiRowSelectionMode.SINGLE,
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
      codLoCal: [0],
      descricaoLocal: ['']
    })
    this.localService.GetLocal().subscribe(locais => { this.source = locais; console.log(locais) })
    UpdateActive();
  }

  SalvarLocal(local: Local) {
    this.localService.PostLocal(local).subscribe(
      () => {
        console.log("Sucess: " + local);
        location.reload();
      }, (erro: any) => {
        console.log("Erro" + local);
      }
    )
  }
  onSelectedRows(rows: Array<GuiSelectedRow>): void {
    var cod: number = rows.map((m: GuiSelectedRow) => m.source.codLoCal)[0];
    var descricao: string = rows.map((m: GuiSelectedRow) => m.source.descricaoLocal)[0];
    let editora: Local = { codLoCal: cod, descricaoLocal: descricao };
    this.formulario.patchValue(editora)
  }
  onSubmit() {
    var form = this.formulario.value;
    this.SalvarLocal(new Local(form.codLoCal, form.descricaoLocal))
    console.log(this.formulario.value)

  }
}


function UpdateActive() {
  document.getElementById('ACadleitor')?.classList.remove('active');
  document.getElementById('ACadlivro')?.classList.remove('active');
  document.getElementById('ACadAutor')?.classList.remove('active');
  document.getElementById('ACadEditora')?.classList.remove('active');
  document.getElementById('AcadSecao')?.classList.remove('active');
  document.getElementById('AcadLocal')?.classList.add('active');
  document.getElementById('AcadColecao')?.classList.remove('active');
  document.getElementById('AEmprestimo')?.classList.remove('active');
  document.getElementById('AConLeitor')?.classList.remove('active');
  document.getElementById('AConlivro')?.classList.remove('active');
  document.getElementById('AConEmprestimo')?.classList.remove('active');
}
