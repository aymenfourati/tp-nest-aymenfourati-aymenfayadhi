import { Injectable } from '@nestjs/common';
import { TodoModelDto } from './dtos/todo-module.dto';
import { UpdateTodoDto } from './dtos/update-todo-module.dto';
import { TodoModel } from './todo-module.controller';

@Injectable()
export class TodoModuleService {
  private todos = [];
  getTodos() {
    return this.todos;
  }
  addtodos(todoto: TodoModelDto) {
    const todo = new TodoModel();
    todo.name = todoto.name;
    todo.desc = todoto.desc;
    this.todos.push(todo);
  }
  deletebyid(id: string) {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }

  getbyid(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  modify(id: string, updateTodoDto: UpdateTodoDto) {
    const todo: TodoModel = this.getbyid(id);
    todo.name = updateTodoDto.name ?? todo.name;
    todo.desc = updateTodoDto.desc ?? todo.desc;
  }
}
