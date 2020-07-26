import { HttpError } from '../../core/http-error.model';
import { Action, createAction, createReducer, on, props } from '@ngrx/store';
import { workspaceActions } from '../actions';
import { LessonModel } from '../models/lesson.model';
import { QuestionModel } from '../models/issue.model';

export interface WorkspaceState {
  pending: boolean;
  error: HttpError;
  selectClass: string;
  lessons: Array<LessonModel>;
  selectLesson: string;
  issues: Array<QuestionModel>;
  selectQuestion: string;
}

export const initialState: WorkspaceState = {
  pending: false,
  error: null,
  selectClass: '',
  lessons: null,
  selectLesson: '',
  issues: null,
  selectQuestion: '',
};

const reducer = createReducer(
  initialState,
  on(workspaceActions.getLessons, (state => ({
      ...state,
      error: null,
      pending: true
    }))
  ),
  on(workspaceActions.getLessonsSuccess, ((state, { lessons }) => ({
      ...state,
      error: null,
      pending: false,
      lessons
    }))
  ),
  on(workspaceActions.getIssuesFailed, ((state, { error }) => ({
      ...state,
      pending: false,
      error,
    }))
  ),
  on(workspaceActions.changeSelectLesson, ((state, { lessonId }) => ({
      ...state,
      error: null,
      pending: false,
      selectLesson: lessonId,
    }))
  ),
  on(workspaceActions.getIssues, ((state, { lessonId }) => ({
      ...state,
      error: null,
      pending: true,
    }))
  ),
  on(workspaceActions.getIssuesSuccess, ((state, { issues }) => ({
      ...state,
      error: null,
      pending: false,
      issues,
    }))
  ),
  on(workspaceActions.getIssuesFailed, ((state, { error }) => ({
      ...state,
      pending: false,
      error
    }))
  ),
  on(workspaceActions.createQuestion, ((state, { question }) => ({
      ...state,
      pending: false,
      error: null,
    }))
  ),
  on(workspaceActions.createAnswer, ((state, { answer }) => ({
      ...state,
      pending: false,
      error: null
    }))
  ),
);

export function workspaceReducer(state: WorkspaceState, action: Action) {
  return reducer(state, action);
}

