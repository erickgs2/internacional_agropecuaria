import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component'

import { FooterComponent } from '../shared/footer/footer.component'


@NgModule({
  declarations: [
    InicioComponent,
    
    FooterComponent
  ],
  imports: [
    CommonModule
    
  ]
})
export class PagesModule { }
