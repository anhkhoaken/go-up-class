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

  constructor(private store: Store<WorkspaceState>, private route: Store<AppState>) {
    this.params$ = this.route.pipe(select(selectRouterParams));
  }

  ngOnInit(): void {
    this.selectClass$ = this.store.pipe(select(WorkspaceSelector.selectClass));
    this.listLesson$ = this.store.pipe(select(WorkspaceSelector.getListLesson));
    this.params$.subscribe(value => {
      if (!!value) {
        this.classId = value['classId'];
      }
    });
    console.log(this.classId);
    this.store.dispatch(workspaceActions.getListLesson({ classId: this.classId }));

    this.listLesson$.subscribe(value => {
      if (!!value) {
        this.listLesson = value;
      }
    });
  }

}
