import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRouting } from './workspace-routing';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { ChapterListPageComponent } from './containers/chapter-list-page/chapter-list-page.component';
import { NbAccordionModule, NbCardModule } from '@nebular/theme';
import { ListLessonPageComponent } from './containers/list-lesson-page/list-lesson-page.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';
import { ChapterCardComponent } from './components/chapter-card/chapter-card.component';
import { IssueCardComponent } from './components/issue-card/issue-card.component';
import { AnswerCardComponent } from './components/answer-card/answer-card.component';

@NgModule({
  declarations: [CONTAINERS, COMPONENTS, ChapterListPageComponent, ListLessonPageComponent, LessonCardComponent, ChapterCardComponent, IssueCardComponent, AnswerCardComponent],
  imports: [
    CommonModule,
    WorkspaceRouting,
    NbCardModule,
    NbAccordionModule
  ]
})
export class WorkspaceModule { }
