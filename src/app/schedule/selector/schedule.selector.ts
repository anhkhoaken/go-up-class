import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectModel } from '../../project/models/project.model';
import { ScheduleState } from '../reducer/schedule.reducer';
import { scheduleFeatureKey } from '../reducer';
import { GetScheduleModel, ScheduleModel } from '../model/schedule.model';

export const selectScheduleState = createFeatureSelector<ScheduleState>(scheduleFeatureKey);

export const selectGroup = createSelector(
  selectScheduleState,
  (state): string => {
    return state && state.selectGroup;
  }
);

export const selectSchedule = createSelector(
  selectScheduleState,
  (state): GetScheduleModel => {
    return state && state.schedule;
  }
);
