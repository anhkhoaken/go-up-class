import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkspaceRouting } from './workspace-routing';
import { CONTAINERS } from './containers';
import { COMPONENTS } from './components';
import { NbAccordionModule, NbButtonModule, NbCardModule, NbWindowModule, NbWindowService } from '@nebular/theme';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { workspaceKey } from './actions/workspace.action';
import { workspaceReducer } from './reducers/workspace.reducer';
import { WorkspaceEffect } from './effects/workspace.effect';
import { WorkspaceService } from './services/workspace.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CreateQuestionFormComponent } from './components/create-question-form/create-question-form.component';

@NgModule({
  declarations: [CONTAINERS, COMPONENTS, CreateQuestionFormComponent],
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
    NbButtonModule,
    ReactiveFormsModule,
    NbWindowModule.forChild()
  ],
  providers: [WorkspaceService, NbWindowService]
})
export class WorkspaceModule { }
