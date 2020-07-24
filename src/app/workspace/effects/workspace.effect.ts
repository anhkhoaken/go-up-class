import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { WorkspaceState } from '../reducers/workspace.reducer';
import { WorkspaceService } from '../services/workspace.service';
import { workspaceActions } from '../actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class WorkspaceEffect {
  constructor(private actions$: Actions,
              private store$: Store<WorkspaceState>,
              private workspaceService: WorkspaceService) {
  }

  getClassInformation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.getClassesInformation),
      exhaustMap((action) =>
        this.workspaceService.getListClass().pipe(
          map((res: any) => workspaceActions.getClassesInformationSuccess({listClass: res})),
          catchError(err => of(workspaceActions.getClassesInformationFail({error: err})))
        )
      )
    )
  );

  getListLesson$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.getListLesson),
      exhaustMap((action) =>
        this.workspaceService.getListLesson(action.classId).pipe(
          map((res: any) => workspaceActions.getListLessonSuccess({listLesson: res})),
          catchError(err => of(workspaceActions.getListAnswerFail({error: err})))
        )
      )
    )
  );

  getListChapter$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.getListChapter),
      exhaustMap((action) =>
        this.workspaceService.getListChapter(action.lessonId).pipe(
          map((res: any) => workspaceActions.getListChapterSuccess({listChapter: res})),
          catchError(err => of(workspaceActions.getListChapterFail({error: err})))
        )
      )
    )
  );

  getListIssue$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.getListIssue),
      exhaustMap((action) =>
        this.workspaceService.getListIssue(action.chapterId).pipe(
          map((res: any) => workspaceActions.getListIssueSuccess({listIssue: res})),
          catchError(err => of(workspaceActions.getListIssueFail({error: err})))
        )
      )
    )
  );

  getListAnswer$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.getListAnswer),
      exhaustMap((action) =>
        this.workspaceService.getListAnswer(action.issueId).pipe(
          map((res: any) => workspaceActions.getListAnswerSuccess({listAnswer: res})),
          catchError(err => of(workspaceActions.getListAnswerFail({error: err})))
        )
      )
    )
  );

  getListQaa$ = createEffect(() =>
    this.actions$.pipe(
      ofType(workspaceActions.getListAnswerAndQuestion),
      exhaustMap((action) =>
        this.workspaceService.getListQuestionAndAnswer(action.chapterId).pipe(
          map((res: any) => workspaceActions.getListAnswerAndQuestionSuccess({result: res})),
          catchError(err => of(workspaceActions.getListAnswerAndQuestionFail({error: err})))
        )
      )
    )
  );
}
