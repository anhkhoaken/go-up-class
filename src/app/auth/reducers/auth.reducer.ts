import { HttpError } from '../../core/http-error.model';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions } from '../actions';
import { AccountInformation } from '../models';

export interface AuthState {
  error: HttpError;
  pending: boolean;
  information: AccountInformation;
}

export const initialState: AuthState = {
  error: null,
  pending: false,
  information: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.signIn, (state, { auth }) => ({
    ...state,
    pending: true,
    error: null,
  })),
  on(AuthActions.signInSuccess, (state, { token, information }) => ({
    ...state,
    pending: false,
    error: null,
    information
  })),
  on(AuthActions.signInFailure, (state, { error }) => ({
    ...state,
    pending: true,
    error
  })),

  on(AuthActions.getUserInformation, (state, {  }) => ({
    ...state,
    pending: true,
    error: null
  })),
  on(AuthActions.getUserInformationSuccess, (state, {  userInformation}) => ({
    ...state,
    pending: true,
    error: null,
    information: userInformation,
  })),
  on(AuthActions.getUserInformationFailed, (state, {  error}) => ({
    ...state,
    pending: true,
    error,
  })),
);

export function authReducer(state: AuthState, action: Action) {
  return reducer(state, action);
}

