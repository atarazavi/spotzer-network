import { Task } from '#shared/models/task.model';
import { TasksService } from '#shared/services/tasks/tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  availableTasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getAvailableTasks().subscribe(tasks => {
      this.availableTasks = tasks;
    });
  }

  assignTask(task: Task) {
    console.log(task);

    this.tasksService.assignTaskToUser(task, 'currentUserId');
  }

}
