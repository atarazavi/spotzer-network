import { Task } from '#shared/models/task.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() {
    // Initialize with some dummy data if necessary
    this.tasksSubject.next([
      {
        id: '1',
        name: 'Design Homepage Layout',
        description: 'Create a responsive homepage design using Figma.',
        status: 'available',
        assignee: null,
        amount: 150
      },
      {
        id: '2',
        name: 'Build Contact Form',
        description: 'Develop a contact form with email validation.',
        status: 'available',
        assignee: null,
        amount: 100
      },
      {
        id: '3',
        name: 'Fix Navigation Bar Bug',
        description: 'Debug and fix the navigation bar not collapsing on mobile views.',
        status: 'assigned',
        assignee: 'user123',
        amount: 75
      },
      {
        id: '4',
        name: 'Write Unit Tests for User Service',
        description: 'Cover all methods in the UserService with unit tests.',
        status: 'completed',
        assignee: 'user456',
        amount: 200
      },
      {
        id: '5',
        name: 'Optimize Image Loading',
        description: 'Implement lazy loading for images in the product gallery.',
        status: 'available',
        assignee: null,
        amount: 50
      },
    ]);
  }

  getAvailableTasks() {
    return this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.status === 'available'))
    );
  }

  getAssignedTasks() {
    return this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.assignee !== null))
    );
  }

  assignTaskToUser(task: Task, userId: string) {
    const updatedTasks = this.tasksSubject.value.map(t => {
      if (t.id === task.id) {
        // Explicitly setting the status as 'assigned' which is a valid status type
        return { ...t, status: 'assigned' as 'assigned', assignee: userId };
      }
      return t;
    });

    this.tasksSubject.next(updatedTasks);
  }

}
