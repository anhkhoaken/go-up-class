import { createAction, props } from '@ngrx/store';
import { Class } from '../models/class.model';
import { HttpError } from '../../core/http-error.model';
import { LessonModel } from '../models/lesson.model';
import { ChapterModel } from '../models/chapter.model';
import { QuestionModel, SaveAnswerModel, SaveQuestionModel } from '../models/issue.model';

export const getLessons = createAction(
  '[Workspace] Get Lessons',
  props<{ classId: string }>()
);

export const getLessonsSuccess = createAction(
  '[Workspace] Get Lessons Success',
  props<{ lessons: Array<LessonModel> }>()
);

export const getLessonsFailed = createAction(
  '[Workspace] Get Lessons Fail',
  props<{ error: HttpError }>()
);

export const changeSelectLesson = createAction(
  '[Workspace] Select lesson',
  props<{ lessonId: string }>()
);

export const getIssues = createAction(
  '[Workspace] Get Issues',
  props<{ lessonId: string }>()
);

export const getIssuesSuccess = createAction(
  '[Workspace] Get Issues Success',
  props<{ issues: Array<QuestionModel> }>()
);

export const getIssuesFailed = createAction(
  '[Workspace] Get Issues Fail',
  props<{ error: HttpError }>()
);

export const createQuestion = createAction(
  '[Workspace] Create Question',
  props<{ question: SaveQuestionModel }>()
);

export const createQuestionSuccess = createAction(
  '[Workspace] Create Question',
);

export const createAnswer = createAction(
  '[Workspace] Create Answer',
  props<{ answer: SaveAnswerModel }>()
);


export const workspaceKey = 'workspace';
