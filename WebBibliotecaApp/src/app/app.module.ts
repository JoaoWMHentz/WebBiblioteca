import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LeitorComponent } from './leitor/leitor.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeitorSpaceComponent } from './leitor-space/leitor-space.component';
import { AdminSpaceComponent } from './admin-space/admin-space.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeitorComponent,
    AdminComponent,
    LeitorSpaceComponent,
    AdminSpaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
