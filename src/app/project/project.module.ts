import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectPageComponent } from './containers/project-page/project-page.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ProjectRoutingModule } from './project-routing.module';
import { NbButtonModule, NbInputModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { projectFeatureKey } from './reducers';
import { projectReducer } from './reducers/project.reducer';
import { ProjectEffect } from './effects/project.effect';
import { ProjectService } from './services';



@NgModule({
  declarations: [ProjectPageComponent],
  imports: [
    CommonModule,
    DragDropModule,
    ProjectRoutingModule,
    NbInputModule,
    NbButtonModule,
    ReactiveFormsModule,
    StoreModule.forFeature(projectFeatureKey, projectReducer),
    EffectsModule.forFeature([ProjectEffect]),
  ],
  providers: [ProjectService]
})
export class ProjectModule { }
