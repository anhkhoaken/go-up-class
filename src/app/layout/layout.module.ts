import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './index';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class LayoutModule { }
