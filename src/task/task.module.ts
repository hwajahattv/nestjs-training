import { Module } from '@nestjs/common';
import { TaskService } from './task/task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity/task.entity';
import { TaskController } from './task/task.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Task]), // This is how you use TypeOrmModule
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
