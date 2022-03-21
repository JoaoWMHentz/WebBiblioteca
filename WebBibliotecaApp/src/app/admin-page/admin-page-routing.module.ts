import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { CadLeitorComponent } from './cad-leitor/cad-leitor.component';
import { CadLivroComponent } from './cad-livro/cad-livro.component';

const routesAdmin: Routes = [
  {path: 'adminpage', component: AdminPageComponent, children: [
    {path: 'cadleitor', component: CadLeitorComponent},
    {path: 'cadlivro', component: CadLivroComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
