import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GuiColumn, GuiPaging, GuiPagingDisplay, GuiSearching } from '@generic-ui/ngx-grid';
import { AppComponent } from 'src/app/app.component';
import { Emprestimo } from 'src/Objects/emprestimo';
import { EmprestimoService } from 'src/Services/emprestimo.service';
import { ConsultarEmprestimoModule } from './consultar-emprestimo.module';

@Component({
  selector: 'app-consultar-emprestimo',
  templateUrl: './consultar-emprestimo.component.html',
  styleUrls: ['./consultar-emprestimo.component.scss']
})
export class ConsultarEmprestimoComponent implements OnInit {

  source: Array<Emprestimo> = [];
  Language = AppComponent.localization;

  formulario: FormGroup;
  columns: Array<GuiColumn> = [
    {
      header: 'Código',
      field: 'codEmprestimo',
      width: 70
    },
    {
      header: 'Leitor',
      field: 'leitor',
    },
    {
      header: 'Cpf',
      field: 'cpfleitor',
    },
    {
      header: 'Livro',
      field: 'livro',
    },
    {
      header: 'Exemplar',
      field: 'exemplar',
      width: 80
    },
    {
      header: 'Empréstimo',
      field: 'dataEmprestimo',
      width: 100
    },
    {
      header: 'Devolução',
      field: 'dataDevolucao',
      width: 100
    },
    {
      header: 'Status',
      field: 'status',
      width: 100
    },
  ];

  constructor(public emprestimoService: EmprestimoService, private formbuilder: FormBuilder) { }

  paging: GuiPaging = {
    enabled: true,
    page: 1,
    pageSize: 5,
    pageSizes: [5, 10, 25, 50],
    pagerTop: false,
    pagerBottom: true,
    display: GuiPagingDisplay.ADVANCED
  };
  ngOnInit(): void {
    this.formulario = this.formbuilder.group({
      leitor: [0],
      livro: [0],
      dataEmprestimo: [0],
      dataDevolucao: [0],
      status: [0]
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
    document.getElementById('AConlivro')?.classList.remove('active');
    document.getElementById('AConEmprestimo')?.classList.add('active');

  }
  onSubmit() {
    var form = this.formulario.value
    this.emprestimoService.ConEmprestimo(form.status, form.livro, form.leitor, form.dataEmprestimo, form.dataDevolucao).subscribe(emprestimo => { this.source = emprestimo })
  }

}
