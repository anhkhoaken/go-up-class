import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListLessonPageComponent } from './containers/list-lesson-page/list-lesson-page.component';


const routes: Routes = [
  {
    path: ':classId/listLesson',
    component: ListLessonPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkspaceRouting { }
