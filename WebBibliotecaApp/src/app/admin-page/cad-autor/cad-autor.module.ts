import { GuiGridModule } from '@generic-ui/ngx-grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadAutorComponent } from './cad-autor.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadAutorComponent
  ],
  imports: [
    CommonModule,  FormsModule, ReactiveFormsModule, GuiGridModule
  ]
})
export class CadAutorModule { }
