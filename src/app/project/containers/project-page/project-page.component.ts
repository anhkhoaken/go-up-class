import { Component, OnInit } from '@angular/core';
import { CdkDrag, CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { ProjectModel } from '../../models/project.model';
import { select, Store } from '@ngrx/store';
import { ProjectState } from '../../reducers/project.reducer';
import { ProjectActions } from '../../actions';
import { ProjectSelector } from '../../selectors';
import { TodoModel } from '../../models/todo.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit {
  project$: Observable<ProjectModel>;
  project: ProjectModel;
  todo: Array<TodoModel>;
  doing: Array<TodoModel>;
  done: Array<TodoModel>;
  rfTodoInfo: FormGroup;

  drop(event: CdkDragDrop<TodoModel[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(event.previousContainer.data,
    //     event.container.data,
    //     event.previousIndex,
    //     event.currentIndex);
    // }
  }

  constructor(private store: Store<ProjectState>, private fb: FormBuilder) {
    this.store.dispatch(ProjectActions.getProject());
    this.todo = [];
    this.doing = [];
    this.done = [];
  }

  saveOnClick() {
    const todoModel = new TodoModel();
    todoModel.name = this.rfTodoInfo.get('name').value;
    todoModel.do = this.rfTodoInfo.get('todo').value;
    this.todo.push(todoModel);
    console.log(todoModel, this.todo);
  }

  onSaveProject() {
    const saveProject = new ProjectModel();
    saveProject.todo = this.todo.slice(0, this.todo.length);
    saveProject.doing = this.doing.slice(0, this.doing.length);
    saveProject.done = this.done.slice(0, this.done.length);
    saveProject.id = '';
    saveProject.userId = '';
    this.store.dispatch(ProjectActions.saveProject({ project: saveProject }));
  }

  ngOnInit(): void {
    this.project$ = this.store.pipe(select(ProjectSelector.selectProject));

    this.project$.subscribe(value => {
      if (!!value) {
        this.project = value;
        this.todo = value.todo.slice(0, value.todo.length);
        this.doing = value.doing.slice(0, value.doing.length);
        this.done = value.done.slice(0, value.done.length);
      }
    });

    this.rfTodoInfo = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      todo: this.fb.control('', [Validators.required]),
    });
  }
}
