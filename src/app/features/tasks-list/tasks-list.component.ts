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
  inProgressTasks: Task[] = [];

  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.tasksService.getAvailableTasks().subscribe(tasks => {
      this.availableTasks = tasks.filter(task => task.status === 'available');
    });

    this.tasksService.getAssignedTasks().subscribe(tasks => {
      this.inProgressTasks = tasks.filter(task => task.status === 'assigned');
    });

  }

  assignTask(task: Task) {
    this.authService.getUserId().subscribe(userId => {
      if (userId) {
        // call the service method to assign the task to the user
        this.tasksService.assignTaskToUser(task, userId);
      }
    });
    this.updateTaskLists();

  }
  unassignTask(task: Task) {
    this.authService.getUserId().subscribe(userId => {
      if (userId && task.assignee === userId) {
        this.tasksService.unassignTaskFromUser(task);
        this.updateTaskLists();
      }
    });
  }
  private updateTaskLists() {
    this.availableTasks = this.tasksService.tasksSubject.value.filter(task => task.status === 'available');
    this.inProgressTasks = this.tasksService.tasksSubject.value.filter(task => task.assignee !== null && task.status !== 'completed');
  }

}
