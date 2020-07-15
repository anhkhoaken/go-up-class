import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthGuardGuard } from './guard/auth-guard.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AuthService } from './services';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authFeatureKey } from './reducers';
import { authReducer } from './reducers/auth.reducer';
import { AuthEffect } from './effects/auth.effect';

@NgModule({
  declarations: [SignInFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature(authFeatureKey, authReducer),
    EffectsModule.forFeature([AuthEffect]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthService,
    AuthGuardGuard,
  ]
})
export class AuthModule { }
