import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './containers/project-page/project-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProjectRoutingModule } from './project-routing.module';
import { NbButtonModule, NbInputModule } from '@nebular/theme';



@NgModule({
  declarations: [ProjectPageComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ProjectRoutingModule,
    NbInputModule,
    NbButtonModule
  ]
})
export class ProjectModule { }
