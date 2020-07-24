import { HttpError } from '../../core/http-error.model';
import { ProjectModel } from '../models/project.model';
import { Action, createReducer, on } from '@ngrx/store';
import { ProjectActions } from '../actions';

export interface ProjectState {
  error: HttpError;
  pending: boolean;
  project: ProjectModel;
}

export const initialState: ProjectState = {
  error: null,
  pending: false,
  project: null,
};

export const reducer = createReducer(
  initialState,

  on(ProjectActions.getProject, (state) => ({
      ...state,
      error: null,
      pending: true
    })
  ),
  on(ProjectActions.getProjectSuccess, (state, { project }) => ({
      ...state,
      error: null,
      pending: false,
      project
    })
  ),
  on(ProjectActions.getProjectFail, (state, { error }) => ({
      ...state,
      error,
      pending: false
    })
  ),
);

export function projectReducer(state: ProjectState, action: Action) {
  return reducer(state, action);
}
