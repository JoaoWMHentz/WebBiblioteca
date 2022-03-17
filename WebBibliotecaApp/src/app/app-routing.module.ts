import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeitorComponent } from './leitor/leitor.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';

const routes: Routes = [
  { path: 'leitor', component: LeitorComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'adminspace', component: AdminSpaceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
