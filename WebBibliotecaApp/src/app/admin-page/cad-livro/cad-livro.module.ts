import { GuiGridModule } from '@generic-ui/ngx-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadLivroComponent } from './cad-livro.component';



@NgModule({
  declarations: [
    CadLivroComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, GuiGridModule
  ]
})
export class CadLivroModule { }
