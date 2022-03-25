import { CadLeitorComponent } from './cad-leitor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CadLeitorComponent],
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  exports: []
})


export class CadLeitorModule { }
