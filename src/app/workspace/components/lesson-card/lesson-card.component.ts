import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { LessonModel } from '../../models/lesson.model';
import { NbWindowService } from '@nebular/theme';
import { CreateQuestionFormComponent } from '../create-question-form/create-question-form.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { WorkspaceState } from '../../reducers/workspace.reducer';
import { SaveQuestionModel } from '../../models/issue.model';
import { workspaceActions } from '../../actions';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.css']
})
export class LessonCardComponent implements OnInit {
  @Input() myLesson: LessonModel;

  @Output() changeSelectLesson = new EventEmitter();
  @ViewChild('contentTemplate') contentTemplate: TemplateRef<any>;

  rfQuestion: FormGroup;
  saveQuestion: SaveQuestionModel;

  constructor(private windowService: NbWindowService, private fb: FormBuilder, private store: Store<WorkspaceState>) {
  }

  ngOnInit(): void {
    this.rfQuestion = this.fb.group({
      question: this.fb.control('', [Validators.required]),
    });
  }

  onChangeSelectLesson() {
    console.log(this.myLesson.id);
    this.changeSelectLesson.emit(this.myLesson.id);
  }

  openWindow() {
    this.windowService.open(
      this.contentTemplate,
      { title: 'Create question', context: { text: 'some text to pass into template' } },
    );
  }

  onSubmit() {
    this.saveQuestion = new SaveQuestionModel();
    this.saveQuestion.classId = this.myLesson.classId;
    this.saveQuestion.content = this.rfQuestion.get('question').value;
    this.saveQuestion.lessonId = this.myLesson.id;

    if (this.rfQuestion.valid) {
      this.store.dispatch(workspaceActions.createQuestion({ question: this.saveQuestion }));
    }
  }
}
