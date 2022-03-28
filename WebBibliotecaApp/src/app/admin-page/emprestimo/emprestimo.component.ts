import { Livro } from 'src/Objects/livro';
import { Leitor } from './../../../Objects/Leitor';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiRowSelection, GuiRowSelectionMode, GuiRowSelectionType, GuiSearching, GuiSelectedRow } from '@generic-ui/ngx-grid';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmprestimoModule } from './emprestimo.module';
import { LeitorService } from 'src/Services/leitor.service';
import { LivroService } from 'src/Services/livro.service';
@Component({
  selector: 'app-emprestimo',
  templateUrl: './emprestimo.component.html',
  styleUrls: ['./emprestimo.component.scss']
})
export class EmprestimoComponent implements OnInit {

  constructor(private leitorService: LeitorService, public livroService: LivroService) { }

  tbLivroValue: string = "";
  tbLeitorValue: string = "";
  formulario: FormGroup;

  source: Array<any> = [
    {
      name: 'T-shirt',
      type: 'clothes',
      price: '15$'
    },
    {
      name: 'Shoes',
      type: 'footwear',
      price: '100$'
    },
    {
      name: 'Ball cap',
      type: 'headgear',
      price: '50$'
    }];
    sourceLeitor: Array<Leitor> = [];
    sourceLivro: Array<Livro> = [];

  paging: GuiPaging = {
		enabled: true,
		page: 1,
		pageSize: 5,
		pageSizes: [5 ,10, 25, 50],
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
      field: 'codLoCal',
      width: 70
    },
    {
      header: 'Descrição',
      field: 'descricaoLocal',
      width: 300
    },];
    columnsLeitor: Array<GuiColumn> = [
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
      }];
      columnsLivro: Array<GuiColumn> = [
        {
          header: 'Código',
          field: 'codLivro',
          width: 75
        },
        {
          header: 'Titulo',
          field: 'tiTulo',
        },
        {
          header: 'Exemplar',
          field: 'numeroExemplar',
          width: 80
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

      onSelectedRowsLivro(rows: Array<GuiSelectedRow>): void {
        var names: string  = rows.map((m: GuiSelectedRow) => m.source.tiTulo)[0];
        this.tbLivroValue = names;
      }
      onSelectedRowsLeitor(rows: Array<GuiSelectedRow>): void {
        var names: string  = rows.map((m: GuiSelectedRow) => m.source.nome)[0];
        this.tbLeitorValue = names;
      }


  ngOnInit(): void {
    this.leitorService.GetLeitor().subscribe(leitores => {this.sourceLeitor = leitores; console.log(leitores)})
    this.livroService.GetLivro().subscribe(livros => { this.sourceLivro =livros})

  }

}
