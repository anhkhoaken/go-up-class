import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRouting } from './workspace-routing';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { NbAccordionModule, NbCardModule } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { workspaceKey } from './actions/workspace.action';
import { workspaceReducer } from './reducers/workspace.reducer';
import { WorkspaceEffect } from './effects/workspace.effect';
import { WorkspaceService } from './services/workspace.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CONTAINERS, COMPONENTS],
  imports: [
    CommonModule,
    WorkspaceRouting,
    NbCardModule,
    NbAccordionModule,
    StoreModule.forFeature(workspaceKey, workspaceReducer),
    EffectsModule.forFeature([WorkspaceEffect]),
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [WorkspaceService]
})
export class WorkspaceModule { }
