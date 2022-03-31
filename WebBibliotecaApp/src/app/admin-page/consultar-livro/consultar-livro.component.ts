import { Colecao } from 'src/Objects/Colecao';
import { ConsultarLivroModule } from './consultar-livro.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiRowSelection, GuiRowSelectionMode, GuiRowSelectionType, GuiSearching } from '@generic-ui/ngx-grid';
import { AppComponent } from 'src/app/app.component';
import { Leitor } from 'src/Objects/Leitor';
import { LivroService } from 'src/Services/livro.service';
import { Livro } from 'src/Objects/livro';

@Component({
  selector: 'app-consultar-livro',
  templateUrl: './consultar-livro.component.html',
  styleUrls: ['./consultar-livro.component.scss']
})
export class ConsultarLivroComponent implements OnInit {

  source: Array<Livro> = [];
  formulario: FormGroup
  Language = AppComponent.localization;
  constructor(private formbuilder: FormBuilder, private livroService: LivroService) { }
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
        field: 'codLivro',
        width: 70
      },
      {
        header: 'Titulo',
        field: 'tiTulo',
      },
      {
        header: 'Descrição',
        field: 'descricao',
      },
      {
        header: 'Exemplar',
        field: 'numeroExemplar',
        width: 75
      },
      {
        header: 'Autor',
        field: 'autor',
      },
      {
        header: 'Editora',
        field: 'editora',
      },
      {
        header: 'Coleção',
        field: 'coleCao',
      },
    ];
    rowSelection: boolean | GuiRowSelection = {
      enabled: true,
      type: GuiRowSelectionType.CHECKBOX,
      mode: GuiRowSelectionMode.SINGLE,
    };

  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
    tiTulo :[0],
    autor :[0],
    editora :[0],
    coleCao :[0],
    seCao :[0],
    status :[0]
    })
    document.getElementById('ACadleitor')?.classList.remove('active');
    document.getElementById('ACadlivro')?.classList.remove('active');
    document.getElementById('ACadAutor')?.classList.remove('active');
    document.getElementById('ACadEditora')?.classList.remove('active');
    document.getElementById('AcadSecao')?.classList.remove('active');
    document.getElementById('AcadLocal')?.classList.remove('active');
    document.getElementById('AcadColecao')?.classList.remove('active');
    document.getElementById('AEmprestimo')?.classList.remove('active');
    document.getElementById('AConLeitor')?.classList.remove('active');
    document.getElementById('AConlivro')?.classList.add('active');

  }
  onSubmit(){
    var form = this.formulario.value
    this.livroService.GetConLivro(form.tiTulo, form.autor, form.editora, form.coleCao, form.seCao, form.status).subscribe(livros => { this.source = livros})
  }
}
