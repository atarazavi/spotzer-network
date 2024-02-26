import { Task } from '#shared/models/task.model';
import { TasksService } from '#shared/services/tasks/tasks.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent {
  availableTasks: Task[];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.availableTasks = this.tasksService.getAvailableTasks();
  }

  assignTask(task: Task) {
    console.log(task);

    const index = this.availableTasks.indexOf(task);
    this.availableTasks[index] = {
      ...task,
      status: 'assigned',
      assignee: 'currentUserId' // replace with actual user ID
    };
  }

}
