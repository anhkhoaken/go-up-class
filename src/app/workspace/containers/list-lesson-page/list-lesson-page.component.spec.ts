import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLessonPageComponent } from './list-lesson-page.component';

describe('ListLessonPageComponent', () => {
  let component: ListLessonPageComponent;
  let fixture: ComponentFixture<ListLessonPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLessonPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLessonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
