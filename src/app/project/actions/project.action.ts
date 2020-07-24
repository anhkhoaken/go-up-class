import { createAction, props } from '@ngrx/store';
import { ProjectModel } from '../models/project.model';
import { HttpError } from '../../core/http-error.model';

export const getProject = createAction(
  '[Workspace] Get Project Information',
);

export const getProjectSuccess = createAction(
  '[Workspace] Get Project Information Success',
  props<{ project: ProjectModel }>()
);

export const getProjectFail = createAction(
  '[Workspace] Get Project Information Fail',
  props<{ error: HttpError }>()
);

export const saveProject = createAction(
  '[Workspace] Save Project Information',
  props<{ project: ProjectModel }>()
);

export const saveProjectSuccess = createAction(
  '[Workspace] Save Project Information Success',
  props<{ res: ProjectModel }>()
);

export const saveProjectFail = createAction(
  '[Workspace] Save Project Information Fail',
  props<{ error: HttpError }>()
);

