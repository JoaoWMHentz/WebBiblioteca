import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './home/home.module';
import { AdminPageModule } from './admin-page/admin-page.module';
import { PesquisaLivroComponent } from './pesquisa-livro/pesquisa-livro.component';
import { HttpClientModule } from '@angular/common/http';
import { LeitorPageComponent } from './leitor-page/leitor-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { NgxMaskModule, IConfig } from 'ngx-mask'
const maskConfigFunction: () => Partial<IConfig> = () => {
  return {
    validation: false,
  };
};



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CollapseModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomeModule,
    AdminPageModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    GuiGridModule,
    NgxMaskModule.forRoot(maskConfigFunction)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

