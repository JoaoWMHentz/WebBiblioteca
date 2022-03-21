import { CadAutorComponent } from './cad-autor/cad-autor.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { CadLeitorComponent } from './cad-leitor/cad-leitor.component';
import { CadLivroComponent } from './cad-livro/cad-livro.component';
import { CadEditoraComponent } from './cad-editora/cad-editora.component';
import { CadSecaoComponent } from './cad-secao/cad-secao.component';
import { CadLocalComponent } from './cad-local/cad-local.component';
import { CadColecaoComponent } from './cad-colecao/cad-colecao.component';

const routesAdmin: Routes = [
  {path: 'adminpage', component: AdminPageComponent, children: [
    {path: 'cadleitor', component: CadLeitorComponent},
    {path: 'cadlivro', component: CadLivroComponent},
    {path: 'cadautor', component: CadAutorComponent},
    {path: 'cadeditora', component: CadEditoraComponent},
    {path: 'cadsecao', component: CadSecaoComponent},
    {path: 'cadLocal', component: CadLocalComponent},
    {path: 'cadcolecao', component: CadColecaoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routesAdmin)],
  exports: [RouterModule]
})
export class AdminPageRoutingModule { }
