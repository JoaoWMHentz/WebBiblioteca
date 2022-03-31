import { ConsultarEmprestimoComponent } from './consultar-emprestimo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ConsultarEmprestimoComponent],
  imports: [
    CommonModule, ReactiveFormsModule, GuiGridModule
  ]
})
export class ConsultarEmprestimoModule { }
