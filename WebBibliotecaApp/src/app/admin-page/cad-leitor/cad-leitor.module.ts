import { GuiGridModule } from '@generic-ui/ngx-grid';
import { CadLeitorComponent } from './cad-leitor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask'


@NgModule({
  declarations: [CadLeitorComponent],
  imports: [
    CommonModule, ReactiveFormsModule, GuiGridModule, NgxMaskModule
  ],
  exports: []
})


export class CadLeitorModule { }
