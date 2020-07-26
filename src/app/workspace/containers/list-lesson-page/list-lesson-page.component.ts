import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { WorkspaceState } from '../../reducers/workspace.reducer';
import { Observable } from 'rxjs';
import { WorkspaceSelector } from '../../selectors';
import { workspaceActions } from '../../actions';
import { LessonModel } from '../../models/lesson.model';
import { Params } from '@angular/router';
import { selectRouterParams } from '../../../core/store/selectors';
import { AppState } from '../../../core/store/reducers';
import { QuestionModel } from '../../models/issue.model';

@Component({
  selector: 'app-list-lesson-page',
  templateUrl: './list-lesson-page.component.html',
  styleUrls: ['./list-lesson-page.component.css']
})
export class ListLessonPageComponent implements OnInit {
  selectClass$: Observable<string>;
  listLesson$: Observable<Array<LessonModel>>;
  listLesson: Array<LessonModel>;
  classId: string;
  params$: Observable<Params>;
  listQuestion$: Observable<Array<QuestionModel>>;
  listQuestion: Array<QuestionModel>;

  constructor(private store: Store<WorkspaceState>, private route: Store<AppState>) {
    this.params$ = this.route.pipe(select(selectRouterParams));
  }

  ngOnInit(): void {
    this.selectClass$ = this.store.pipe(select(WorkspaceSelector.selectWorkspaceClass));
    this.listLesson$ = this.store.pipe(select(WorkspaceSelector.selectWorkspaceLessons));
    this.listQuestion$ = this.store.pipe(select(WorkspaceSelector.selectWorkspaceIssues));
    this.params$.subscribe(value => {
      if (!!value) {
        this.classId = value['classId'];
      }
    });
    this.listQuestion$.subscribe(value => {
      if (!!value) {
        this.listQuestion = value;
      }
    });
    console.log(this.classId);
    this.store.dispatch(workspaceActions.getLessons({ classId: this.classId }));

    this.listLesson$.subscribe(value => {
      if (!!value) {
        this.listLesson = value;
      }
    });
  }

  onChangeSelectLesson(lessonId: string){
    console.log(lessonId);
    this.store.dispatch(workspaceActions.getIssues({lessonId}));
  }

}
