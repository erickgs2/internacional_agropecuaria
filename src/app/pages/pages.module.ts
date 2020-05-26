import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './inicio/inicio.component'

import { FooterComponent } from '../shared/footer/footer.component';
import { NosotrosComponent } from './nosotros/nosotros.component'


@NgModule({
  declarations: [
    InicioComponent,
    NosotrosComponent,
    
    FooterComponent,
    
  ],
  imports: [
    CommonModule
    
  ]
})
export class PagesModule { }
