import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WorkspaceState } from '../reducers/workspace.reducer';
import { WorkspaceService } from '../services/workspace.service';
import { workspaceActions } from '../actions';
import { catchError, exhaustMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class WorkspaceEffect {
  constructor(private actions$: Actions,
              private store$: Store<WorkspaceState>,
              private workspaceService: WorkspaceService) {
  }

  getListLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.getLessons),
      exhaustMap((action) =>
        this.workspaceService.getListLesson(action.classId).pipe(
          map((res) => workspaceActions.getLessonsSuccess({ lessons: res })),
          catchError(err => of(workspaceActions.getLessonsFailed({ error: err })))
        )
      )
    )
  );

  getListIssue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.getIssues),
      exhaustMap((action) =>
        this.workspaceService.getListIssue(action.lessonId).pipe(
          map((res) => workspaceActions.getIssuesSuccess({ issues: res })),
          catchError(err => of(workspaceActions.getIssuesFailed({ error: err })))
        )
      )
    )
  );

  createQuestion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.createQuestion),
      exhaustMap((action) =>
        this.workspaceService.createQuestion(action.question).pipe(
          map((res) => workspaceActions.createQuestionSuccess()),
          catchError(err => of(workspaceActions.getIssuesFailed({ error: err })))
        )
      )
    )
  );

  createAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.createAnswer),
      exhaustMap((action) =>
        this.workspaceService.createAnswer(action.answer).pipe(
          map((res) => workspaceActions.createQuestionSuccess()),
          catchError(err => of(workspaceActions.getIssuesFailed({ error: err })))
        )
      )
    )
  );
}
