import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { CadLeitorComponent } from './cad-leitor/cad-leitor.component';
import { CadSecaoComponent } from './cad-secao/cad-secao.component';
import { CadLocalComponent } from './cad-local/cad-local.component';
import { CadLivroComponent } from './cad-livro/cad-livro.component';
import { CadEditoraComponent } from './cad-editora/cad-editora.component';
import { CadAutorComponent } from './cad-autor/cad-autor.component';


@NgModule({
  declarations: [
    AdminPageComponent,],
  imports: [
    AdminPageRoutingModule,
    CommonModule],
  exports: [AdminPageComponent]
})
export class AdminPageModule { }
