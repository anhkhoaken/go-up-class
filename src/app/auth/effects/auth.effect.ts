import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services';
import { Router } from '@angular/router';
import { AuthActions } from '../actions';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AccountInformation } from '../models';

@Injectable()
export class AuthEffect {
  constructor(private actions$: Actions,
              private authService: AuthService,
              private router: Router) {
  }

  signIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.signIn),
      exhaustMap((action) =>
        this.authService.signIn(action.auth).pipe(
          map((res: any) => {
            return AuthActions.signInSuccess({ token: res.token });
          }),
          catchError((error) => of(AuthActions.signInFailure({ error })))
        )
      )
    )
  );

  signInSuccess$ = createEffect(() =>
      this.actions$.pipe(
        ofType(AuthActions.signInSuccess),
        tap((action) => {
          this.authService.setToken(action.token);
          this.router.navigate(['/work/workspace']);
        }),
      ),
    { dispatch: false }
  );

  getAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.getUserInformation),
      exhaustMap((action) =>
        this.authService.getUser().pipe(
          map((res) => {
            return AuthActions.getUserInformationSuccess({ userInformation: res });
          }),
          catchError((error) => of(AuthActions.getUserInformationFailed({ error })))
        )
      )
    )
  );
}
