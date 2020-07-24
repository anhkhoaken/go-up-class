import { createFeatureSelector, createSelector } from '@ngrx/store';
import { projectFeatureKey, projectReducer } from '../reducers';
import { ProjectModel } from '../models/project.model';

export const selectProjectState = createFeatureSelector<projectReducer.ProjectState>(projectFeatureKey);

export const selectProject = createSelector(
  selectProjectState,
  (state): ProjectModel => {
    return state && state.project;
  }
);
