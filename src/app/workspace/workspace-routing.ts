import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListPageComponent } from './containers/class-list-page/class-list-page.component';
import { ChapterListPageComponent } from './containers/chapter-list-page/chapter-list-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClassListPageComponent
  },
  {
    path: ':lessonId/listChapter',
    component: ChapterListPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRouting { }
