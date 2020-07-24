import { Component, Input, OnInit } from '@angular/core';
import { AnswerModel } from '../../models/answer.model';

@Component({
  selector: 'app-answer-card',
  templateUrl: './answer-card.component.html',
  styleUrls: ['./answer-card.component.css']
})
export class AnswerCardComponent implements OnInit {
  @Input() answer: AnswerModel;
  constructor() { }

  ngOnInit(): void {
    console.log(this.answer);
  }

}
