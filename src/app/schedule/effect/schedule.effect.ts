import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProjectService } from '../../project/services';
import { Router } from '@angular/router';
import { ScheduleService } from '../service/schedule.service';
import { ProjectActions } from '../../project/actions';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { ScheduleActions } from '../actions';


@Injectable()
export class ScheduleEffect {
  constructor(
    private actions$: Actions,
    private scheduleService: ScheduleService,
    private router: Router,
  ) {
  }

  getSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.getSchedule),
      exhaustMap((action) =>
        this.scheduleService.getSchedule(action.groupId).pipe(
          map((res) => {
            return ScheduleActions.getScheduleSuccess({ schedules: res });
          }),
          catchError((error) => of(ScheduleActions.getScheduleFail({ error })))
        )
      )
    )
  );

  saveSchedule$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ScheduleActions.saveSchedule),
      exhaustMap((action) =>
        this.scheduleService.saveSchedule(action.schedules).pipe(
          map((res) => {
            return ScheduleActions.saveScheduleSuccess();
          }),
          catchError((error) => of(ScheduleActions.saveScheduleFail({ error }))
          )
        )
      ))
    );
}
