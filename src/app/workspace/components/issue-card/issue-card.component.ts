import { Component, Input, OnInit } from '@angular/core';
import { AnswerModel, QAndAModel } from '../../models/answer.model';

@Component({
  selector: 'app-issue-card',
  templateUrl: './issue-card.component.html',
  styleUrls: ['./issue-card.component.css']
})
export class IssueCardComponent implements OnInit {
  @Input() qaa: QAndAModel;
  constructor() { }

  ngOnInit(): void {
    console.log(this.qaa.answers);
  }

}
