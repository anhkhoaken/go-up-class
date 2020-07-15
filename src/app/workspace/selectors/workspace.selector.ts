import { createFeatureSelector, createSelector } from '@ngrx/store';
import { WorkspaceState } from '../reducers/workspace.reducer';
import { workspaceKey } from '../actions/workspace.action';

export const selectWorkspaceState = createFeatureSelector<WorkspaceState>(workspaceKey);

export const selectClass = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectClass;
  }
);

export const selectLesson = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectLesson;
  }
);

export const selectChapter = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectChapter;
  }
);

export const selectIssue = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectIssue;
  }
);

