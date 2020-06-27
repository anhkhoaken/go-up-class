import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './index';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';



@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class LayoutModule { }
