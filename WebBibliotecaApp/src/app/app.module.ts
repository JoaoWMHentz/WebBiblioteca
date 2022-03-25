import { CadLeitorModule } from './admin-page/cad-leitor/cad-leitor.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Homemodule } from './home/home.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { PesquisaLivroComponent } from './pesquisa-livro/pesquisa-livro.component';
import { HttpClientModule } from '@angular/common/http';
import { LeitorPageComponent } from './leitor-page/leitor-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PesquisaLivroComponent,
    LeitorPageComponent,
  ],
  imports: [
    CollapseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Homemodule,
    AdminPageModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CadLeitorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
