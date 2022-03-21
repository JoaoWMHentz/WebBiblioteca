import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomeComponent } from './home/home.component';
import { LoginadminComponent } from './loginadmin/loginadmin.component';
import { LoginleitorComponent } from './loginleitor/loginleitor.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'loginleitor', component: LoginleitorComponent},
  {path: 'loginadmin', component: LoginadminComponent},
  {path: 'adminpage', component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
