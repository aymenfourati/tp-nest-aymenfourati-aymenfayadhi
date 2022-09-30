import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Param,
  Put,
} from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { TodoModuleService } from './todo-module.service';
import { TodoModelDto } from './dtos/todo-module.dto';
import { UpdateTodoDto } from './dtos/update-todo-module.dto';

export enum TodoStatusEnum {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalisé',
}
export class TodoModel {
  public id: string;
  public status: TodoStatusEnum;
  public date: Date;
  public name: string;
  public desc: string;
  constructor() {
    this.id = uuidv4();
    this.date = new Date();
    this.status = TodoStatusEnum.waiting;
  }
}
@Controller('todo-module')
export class TodoModuleController {
  constructor(private readonly todomoduleService: TodoModuleService) {}

  @Get()
  getTodos() {
    return this.todomoduleService.getTodos();
  }
  @Post()
  addtodos(@Body() todoDto: TodoModelDto) {
    this.todomoduleService.addtodos(todoDto);
  }
  @Delete(':id')
  deletebyid(@Param('id') id: string) {
    this.todomoduleService.deletebyid(id);
  }

  @Get(':id')
  getbyid(@Param('id') id: string) {
    return this.todomoduleService.getbyid(id);
  }

  @Put(':id')
  modify(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    this.todomoduleService.modify(id, updateTodoDto);
  }
}
