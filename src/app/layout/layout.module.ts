import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './index';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { RouterModule } from '@angular/router';
import {
  NbButtonModule,
  NbCardModule, NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbSidebarService,
  NbUserModule
} from '@nebular/theme';
import { NbMenuInternalService } from '@nebular/theme/components/menu/menu.service';

@NgModule({
  declarations: [
    COMPONENTS,
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbSidebarModule,
    NbButtonModule,
    NbCardModule,
    NbMenuModule,
    NbUserModule,
    NbIconModule,
  ],
  providers: [NbSidebarService],
  exports: [
    DefaultLayoutComponent,
  ]
})
export class LayoutModule { }
