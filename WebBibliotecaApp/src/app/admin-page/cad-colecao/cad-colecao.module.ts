import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadColecaoComponent } from '../cad-colecao/cad-colecao.component';
import { GuiGridModule } from '@generic-ui/ngx-grid';



@NgModule({
  declarations: [
    CadColecaoComponent
  ],
  imports: [
    CommonModule, GuiGridModule, FormsModule, ReactiveFormsModule
  ]
})
export class CadColecaoModule { }
