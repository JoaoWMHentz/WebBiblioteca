import { AppComponent } from 'src/app/app.component';
import { EditoraService } from './../../../Services/editora.service';
import { GuiPaging, GuiPagingDisplay, GuiSearching, GuiColumn, GuiRowSelection, GuiRowSelectionType, GuiRowSelectionMode, GuiSelectedRow } from '@generic-ui/ngx-grid';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  constructor(private formbuilder: FormBuilder, public editoraService: EditoraService) { }

  Language = AppComponent.localization;

  formulario: FormGroup;

  source: Array<Editora> = [];

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
  rowSelection: boolean | GuiRowSelection = {
    enabled: true,
    type: GuiRowSelectionType.CHECKBOX,
    mode: GuiRowSelectionMode.SINGLE,
  };

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      codEditora: [0],
      nomeEditora: ['', Validators.required],
      descricaoEDitora: ['',Validators.required]
    })

    this.editoraService.GetEditora().subscribe(editoras => { this.source = editoras; console.log(editoras) })

    UpadateActive();
  }
  onSelectedRows(rows: Array<GuiSelectedRow>): void {
    var cod: number = rows.map((m: GuiSelectedRow) => m.source.codEditora)[0];
    var nome: string = rows.map((m: GuiSelectedRow) => m.source.nomeEditora)[0];
    var descricao: string = rows.map((m: GuiSelectedRow) => m.source.descricaoEDitora)[0];
    let editora: Editora = {codEditora: cod,nomeEditora: nome,descricaoEDitora: descricao};
    this.formulario.patchValue(editora)
  }

  SalvarEditora(editora: Editora) {
    this.editoraService.PostEditora(editora).subscribe(
      () => {
        console.log("Sucess");
        location.reload();
      }, (erro: any) => {
        console.log("Erro")
      }
    )
  }
  onSubmit() {
    var form = this.formulario.value;
    this.SalvarEditora(new Editora(form.codEditora, form.nomeEditoraa, form.descricaoEDitora))
    console.log(this.formulario.value)
  }
}
function UpadateActive() {
  document.getElementById('ACadleitor')?.classList.remove('active');
  document.getElementById('ACadlivro')?.classList.remove('active');
  document.getElementById('ACadAutor')?.classList.remove('active');
  document.getElementById('ACadEditora')?.classList.add('active');
  document.getElementById('AcadSecao')?.classList.remove('active');
  document.getElementById('AcadLocal')?.classList.remove('active');
  document.getElementById('AcadColecao')?.classList.remove('active');
  document.getElementById('AEmprestimo')?.classList.remove('active');
  document.getElementById('AConLeitor')?.classList.remove('active');
  document.getElementById('AConlivro')?.classList.remove('active');
  document.getElementById('AConEmprestimo')?.classList.remove('active');
}
