import { createAction, props } from '@ngrx/store';
import { HttpError } from '../../core/http-error.model';
import { AccountInformation, AuthModel } from '../models';

export const signIn = createAction(
  '[Auth] Sign-in',
  props<{ auth: AuthModel }>()
);

export const signInSuccess = createAction(
  '[Auth] Sign-in Success',
  props<{ token: string }>()
);

export const signInFailure = createAction(
  '[Auth] Sign-in Failure',
  props<{ error: HttpError }>()
);

export const getUserInformation = createAction(
  '[Auth] Get User Information',
);

export const getUserInformationSuccess = createAction(
  '[Auth] Get User Information Successfully',
  props<{userInformation: AccountInformation}>()
);

export const getUserInformationFailed = createAction(
  '[Auth] Get User Information Failed',
  props<{error: HttpError}>()
);
