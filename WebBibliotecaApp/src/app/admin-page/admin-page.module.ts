import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminPageRoutingModule } from './admin-page-routing.module';
import { AdminPageComponent } from './admin-page.component';
import { CadLeitorComponent } from './cad-leitor/cad-leitor.component';


@NgModule({
  declarations: [
    AdminPageComponent,
    CadLeitorComponent],
  imports: [
    AdminPageRoutingModule,
    CommonModule],
  exports: [AdminPageComponent]
})
export class AdminPageModule { }
