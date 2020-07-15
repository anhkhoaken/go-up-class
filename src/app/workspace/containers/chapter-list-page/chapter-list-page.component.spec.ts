import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapterListPageComponent } from './chapter-list-page.component';

describe('ChapterListPageComponent', () => {
  let component: ChapterListPageComponent;
  let fixture: ComponentFixture<ChapterListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapterListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapterListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
