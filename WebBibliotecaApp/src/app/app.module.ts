import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Homemodule } from './home/home.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { PesquisaLivroComponent } from './pesquisa-livro/pesquisa-livro.component';
@NgModule({
  declarations: [
    AppComponent,
    PesquisaLivroComponent,
  ],
  imports: [
    CollapseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Homemodule,
    AdminPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
