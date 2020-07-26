import { createAction, props } from '@ngrx/store';
import { HttpError } from '../../core/http-error.model';
import { GetScheduleModel, SaveScheduleModel, ScheduleModel } from '../model/schedule.model';

export const getSchedule = createAction(
  '[Schedule] Get Schedule',
  props<{ groupId: string }>()
);

export const getScheduleSuccess = createAction(
  '[Schedule] Get Schedule Success',
  props<{ schedules: GetScheduleModel }>()
);

export const getScheduleFail = createAction(
  '[Schedule] Get Schedule Fail',
  props<{ error: HttpError }>()
);

export const saveSchedule = createAction(
  '[Schedule] Save Schedule',
  props<{ schedules: SaveScheduleModel }>()
);

export const saveScheduleSuccess = createAction(
  '[Schedule] Save Schedule Success',
);

export const saveScheduleFail = createAction(
  '[Schedule] Save Schedule Failed',
  props<{ error: HttpError }>()
);

