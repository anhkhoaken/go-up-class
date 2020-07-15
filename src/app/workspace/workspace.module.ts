import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRouting } from './workspace-routing';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { ChapterListPageComponent } from './containers/chapter-list-page/chapter-list-page.component';

@NgModule({
  declarations: [CONTAINERS, COMPONENTS, ChapterListPageComponent],
  imports: [
    CommonModule,
    WorkspaceRouting
  ]
})
export class WorkspaceModule { }
