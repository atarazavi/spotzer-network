import { Task } from '#shared/models/task.model';
import { TasksService } from '#shared/services/tasks/tasks.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'description', 'status', 'amount', 'completionDate'];
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private tasksService: TasksService) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

    this.loadCompletedTasks(); // Load tasks
  }

  loadCompletedTasks() {
    this.tasksService.getCompletedTasks().subscribe(tasks => {
      this.dataSource.data = tasks; // Assign the tasks to the dataSource.data
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

