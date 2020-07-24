import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectService } from '../services';
import { Router } from '@angular/router';
import { ProjectActions } from '../actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ProjectEffect {
  constructor(
    private actions$: Actions,
    private projectService: ProjectService,
    private router: Router,
  ) {
  }
  getProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.getProject),
      exhaustMap((action) =>
        this.projectService.getProject().pipe(
          map((res: any) => {
            return ProjectActions.getProjectSuccess({ project: res });
          }),
          catchError((error) => of(ProjectActions.getProjectFail({ error })))
        )
      )
    )
  );

  saveProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectActions.saveProject),
      exhaustMap((action) =>
        this.projectService.saveProject(action.project).pipe(
          map((res: any) => {
            return ProjectActions.saveProjectSuccess({res});
          }),
          catchError((error) => of(ProjectActions.saveProjectFail({ error })))
        )
      )
    )
  );
}
