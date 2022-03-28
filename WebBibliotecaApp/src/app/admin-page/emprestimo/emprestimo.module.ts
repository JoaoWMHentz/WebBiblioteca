import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmprestimoComponent } from './emprestimo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuiGridModule } from '@generic-ui/ngx-grid';



@NgModule({
  declarations: [
    EmprestimoComponent
  ],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, GuiGridModule
  ]
})
export class EmprestimoModule { }
