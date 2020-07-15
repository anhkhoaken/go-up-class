import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListPageComponent } from './containers/class-list-page/class-list-page.component';
import { ChapterListPageComponent } from './containers/chapter-list-page/chapter-list-page.component';
import { ListLessonPageComponent } from './containers/list-lesson-page/list-lesson-page.component';


const routes: Routes = [
  {
    path: '',
    component: ClassListPageComponent
  },
  {
    path: ':classId/listLesson',
    component: ListLessonPageComponent,
  },
  {
    path: ':classId/:lessonId/listChapter',
    component: ChapterListPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRouting { }
