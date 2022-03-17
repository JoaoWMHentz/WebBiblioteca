import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Cad_leitorComponent } from './cad_leitor/cad_leitor.component';

const routes: Routes = [
  { path: 'adminspace/cadleitor', component: Cad_leitorComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminSpaceRouting {}
