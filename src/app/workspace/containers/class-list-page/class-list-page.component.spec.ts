import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassListPageComponent } from './class-list-page.component';

describe('ClassListPageComponent', () => {
  let component: ClassListPageComponent;
  let fixture: ComponentFixture<ClassListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
