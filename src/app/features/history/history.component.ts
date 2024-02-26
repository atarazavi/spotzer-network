import { Task } from '#shared/models/task.model';
import { TasksService } from '#shared/services/tasks/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  assignedTasks: Task[] = [];

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.getAssignedTasks().subscribe(tasks => {
      this.assignedTasks = tasks;
    });
  }
}
