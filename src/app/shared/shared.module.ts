import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { PrimerNgModule } from '../primer-ng/primer-ng.module';


@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimerNgModule
  ],
  exports: [ MenuComponent]
})
export class SharedModule { }
