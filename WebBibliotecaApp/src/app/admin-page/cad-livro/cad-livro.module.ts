import { GuiGridModule } from '@generic-ui/ngx-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadLivroComponent } from './cad-livro.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [
    CadLivroComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, GuiGridModule, NgxMaskModule
  ]
})
export class CadLivroModule { }
