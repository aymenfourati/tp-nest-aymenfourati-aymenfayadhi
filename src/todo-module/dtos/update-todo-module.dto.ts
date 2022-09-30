import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { TodoStatusEnum } from '../todo-module.controller';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  desc: string;

  @IsOptional()
  @IsEnum(TodoStatusEnum)
  status: TodoStatusEnum;
}
