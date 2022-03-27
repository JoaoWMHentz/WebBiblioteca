import { GuiGridModule } from '@generic-ui/ngx-grid';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadLocalComponent } from './cad-local.component';



@NgModule({
  declarations: [CadLocalComponent],
  imports: [
    CommonModule, ReactiveFormsModule, GuiGridModule, FormsModule
  ]
})
export class CadLocalModule { }
