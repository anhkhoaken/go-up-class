import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chapter-list-page',
  templateUrl: './chapter-list-page.component.html',
  styleUrls: ['./chapter-list-page.component.css']
})
export class ChapterListPageComponent implements OnInit {
  show = false;
  constructor() { }

  ngOnInit(): void {
  }
  btnClick(){
    this.show = !this.show;
  }
}
