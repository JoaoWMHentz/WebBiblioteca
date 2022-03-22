import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RenovarComponent } from './renovar/renovar.component';
import { ReservarComponent } from './reservar/reservar.component';



@NgModule({
  declarations: [
    RenovarComponent,
    ReservarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LeitorPageModule { }
