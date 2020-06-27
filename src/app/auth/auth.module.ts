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



@NgModule({
  declarations: [SignInFormComponent, AuthPageComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
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
