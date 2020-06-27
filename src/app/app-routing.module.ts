import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';
import { AuthGuardGuard } from './auth/guard/auth-guard.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'work',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuardGuard],
    children: [
      {
        path: '',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: '',
        loadChildren: () => import('./infomation/infomation.module').then(m => m.InfomationModule),
      },
      {
        path: '',
        loadChildren: () => import('./workspace/workspace.module').then(m => m.WorkspaceModule),
      },
      {
        path: '',
        loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
