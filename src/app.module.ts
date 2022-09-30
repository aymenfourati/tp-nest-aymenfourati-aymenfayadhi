import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstModule } from './first/first.module';
import { TodoModuleModule } from './todo-module/todo-module.module';

@Module({
  imports: [FirstModule, TodoModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
