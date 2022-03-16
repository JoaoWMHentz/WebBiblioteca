import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

const MaterialComponents = [
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  TooltipModule.forRoot()
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
  ]
})
export class MaterialModule { }
