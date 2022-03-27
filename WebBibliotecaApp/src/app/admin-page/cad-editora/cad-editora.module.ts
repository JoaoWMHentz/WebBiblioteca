import { GuiGridModule } from '@generic-ui/ngx-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadEditoraComponent } from './cad-editora.component';



@NgModule({
  declarations: [
    CadEditoraComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, GuiGridModule
  ]
})
export class CadEditoraModule { }
