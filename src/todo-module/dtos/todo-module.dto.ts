import { IsNotEmpty, IsString } from 'class-validator';

export class TodoModelDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  desc: string;
}
