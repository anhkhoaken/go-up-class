import { TodoModel } from './todo.model';

export class ProjectModel {
  id: string;
  userId: string;
  todo: Array<TodoModel>;
  doing: Array<TodoModel>;
  done: Array<TodoModel>;
}

