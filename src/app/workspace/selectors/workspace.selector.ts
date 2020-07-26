import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkspaceState } from '../reducers/workspace.reducer';
import { workspaceKey } from '../actions/workspace.action';

export const selectWorkspaceState = createFeatureSelector<WorkspaceState>(workspaceKey);

export const selectWorkspaceError = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.error;
  }
);

export const selectWorkspaceLessons = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.lessons;
  }
);

export const selectWorkspaceIssues = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.issues;
  }
);


export const selectWorkspaceClass = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectClass;
  }
);

export const selectWorkspaceLesson = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectLesson;
  }
);

export const selectWorkspaceQuestion = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectQuestion;
  }
);

