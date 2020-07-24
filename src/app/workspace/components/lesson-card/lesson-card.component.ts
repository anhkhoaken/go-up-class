import { Component, Input, OnInit } from '@angular/core';
import { LessonModel } from '../../models/lesson.model';

@Component({
  selector: 'app-lesson-card',
  templateUrl: './lesson-card.component.html',
  styleUrls: ['./lesson-card.component.css']
})
export class LessonCardComponent implements OnInit {
  @Input() myLesson: LessonModel;
  constructor() { }

  ngOnInit(): void {
  }

}
