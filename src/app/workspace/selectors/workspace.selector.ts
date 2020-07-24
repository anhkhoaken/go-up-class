import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, WorkspaceState } from '../reducers/workspace.reducer';
import { workspaceKey } from '../actions/workspace.action';

export const selectWorkspaceState = createFeatureSelector<WorkspaceState>(workspaceKey);

export const {
  selectIds: selectClassIds,
  selectEntities: selectClassEntities,
  selectAll: selectAllClass,
  selectTotal: selectTotalClass,
} = adapter.getSelectors(selectWorkspaceState);

export const selectClass = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectClass;
  }
);

export const getListLesson = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.listLesson;
  }
);

export const selectLesson = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectLesson;
  }
);

export const getListChapter = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.listChapter;
  }
);

export const selectChapter = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectChapter;
  }
);

export const getListIssue = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.listIssue;
  }
);

export const selectIssue = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.selectIssue;
  }
);

export const selectQaa = createSelector(
  selectWorkspaceState,
  (state) => {
    return state && state.qaa;
  }
);

