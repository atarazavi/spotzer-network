import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '#shared/shared.module';
import { TasksListComponent } from './tasks-list.component';
import { TasksListRoutingModule } from './tasks-list-routing.module';

@NgModule({
  declarations: [TasksListComponent],
  imports: [
    CommonModule,
    SharedModule,
    TasksListRoutingModule,
  ],
  exports: [TasksListComponent]
})
export class TasksListModule { }
