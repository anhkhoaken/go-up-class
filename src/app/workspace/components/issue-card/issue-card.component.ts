import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { QuestionModel, SaveAnswerModel, SaveQuestionModel } from '../../models/issue.model';
import { Store } from '@ngrx/store';
import { WorkspaceState } from '../../reducers/workspace.reducer';
import { NbWindowService } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { workspaceActions } from '../../actions';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit {
  @Input() qaa: QuestionModel;
  rfAnswer: FormGroup;
  saveAnswer: SaveAnswerModel;
  @ViewChild('content') contentT: TemplateRef<any>;

  constructor(private windowService: NbWindowService, private store: Store<WorkspaceState>, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfAnswer = this.fb.group({
      answer: this.fb.control('', [Validators.required]),
    });
  }

  openWindow() {
    this.windowService.open(
      this.contentT,
      { title: 'Create Answer', context: { text: 'some text to pass into template' } },
    );
  }

  onSubmit() {
    this.saveAnswer = new SaveAnswerModel();
    this.saveAnswer.content = this.rfAnswer.get('answer').value;
    this.saveAnswer.questionId = this.qaa.id;
    console.log(this.saveAnswer);

    if (this.rfAnswer.valid) {
      this.store.dispatch(workspaceActions.createAnswer({ answer: this.saveAnswer }));
    }
  }

}
