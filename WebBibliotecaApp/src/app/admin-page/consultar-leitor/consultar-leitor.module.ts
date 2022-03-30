import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { NgxMaskModule } from 'ngx-mask';
import { ConsultarLeitorComponent } from './consultar-leitor.component';



@NgModule({
  declarations: [ConsultarLeitorComponent],
  imports: [
    CommonModule, ReactiveFormsModule, GuiGridModule, NgxMaskModule
  ]
})
export class ConsultarLeitorModule { }
