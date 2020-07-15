import { createFeatureSelector, createSelector } from '@ngrx/store';
import { authFeatureKey, AuthReducer } from '../reducers';
import { HttpError } from '../../core/http-error.model';
import { AccountInformation } from '../models';


export const selectAuthState = createFeatureSelector<AuthReducer.AuthState>(authFeatureKey);

export const selectAuthError = createSelector(
  selectAuthState,
  (state): HttpError => {
    return state && state.error;
  }
);

export const selectAuthPending = createSelector(
  selectAuthState,
  (state) => {
    return state && state.pending;
  }
);

export const selectAuthInformation = createSelector(
  selectAuthState,
  (state) => {
    return state && state.information;
  }
);


