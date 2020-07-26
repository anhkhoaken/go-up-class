import { HttpError } from '../../core/http-error.model';
import { GetScheduleModel, ScheduleModel } from '../model/schedule.model';
import { Action, createReducer, on } from '@ngrx/store';
import { ProjectActions } from '../../project/actions';
import { ScheduleActions } from '../actions';
import { ProjectState } from '../../project/reducers/project.reducer';

export interface ScheduleState {
  error: HttpError;
  pending: boolean;
  selectGroup: string;
  schedule: GetScheduleModel;
}

export const initialState: ScheduleState = {
  error: null,
  pending: false,
  selectGroup: '',
  schedule: null
};

export const reducer = createReducer(
  initialState,

  on(ScheduleActions.getSchedule, (state, {groupId}) => ({
      ...state,
      error: null,
      pending: true,
    })
  ),
  on(ScheduleActions.getScheduleSuccess, (state, {schedules}) => ({
      ...state,
      error: null,
      pending: false,
      schedule: schedules
    })
  ),
  on(ScheduleActions.getScheduleFail, (state, {error}) => ({
      ...state,
      pending: false,
      error
    })
  ),
  on(ScheduleActions.saveScheduleFail, (state, {error}) => ({
      ...state,
      pending: false,
      error
    })
  ),
  on(ScheduleActions.saveSchedule, (state, {schedules}) => ({
      ...state,
      pending: true,
      error: null
    })
  ),
  on(ScheduleActions.saveScheduleSuccess, (state, {}) => ({
      ...state,
      pending: true,
      error: null
    })
  ),
);

export function scheduleReducer(state: ScheduleState, action: Action) {
  return reducer(state, action);
}
