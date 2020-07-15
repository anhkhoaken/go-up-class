import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './index';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import { NbButtonModule, NbLayoutModule, NbSidebarModule, NbSidebarService } from '@nebular/theme';

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule
  ],
  providers: [NbSidebarService],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class LayoutModule { }
