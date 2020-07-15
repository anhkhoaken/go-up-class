import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../../models/class.model';

@Component({
  selector: 'app-class-card',
  templateUrl: './class-card.component.html',
  styleUrls: ['./class-card.component.css']
})
export class ClassCardComponent implements OnInit {
  @Input() myClass: Class;
  constructor() { }

  ngOnInit(): void {
    console.log(this.myClass);
  }

}
