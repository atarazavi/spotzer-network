import { Task } from '#shared/models/task.model';
import { AuthService } from '#shared/services/auth/auth.service';
import { TasksService } from '#shared/services/tasks/tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  availableTasks: Task[] = [];

  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.tasksService.getAvailableTasks().subscribe(tasks => {
      this.availableTasks = tasks;
    });
    this.assignTask = this.assignTask.bind(this);

  }

  assignTask(task: Task) {
    this.authService.getUserId().subscribe(userId => {
      if (userId) {
        // call the service method to assign the task to the user
        this.tasksService.assignTaskToUser(task, userId);
      }
    });
  }

}
