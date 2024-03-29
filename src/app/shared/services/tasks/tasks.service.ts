import { Task } from '#shared/models/task.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  public tasksSubject = new BehaviorSubject<Task[]>([]);
  public tasks$ = this.tasksSubject.asObservable();

  constructor() {
    // Initialize with some dummy data
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
        assignee: null,
        amount: 75
      },
      {
        id: '4',
        name: 'Write Unit Tests for User Service',
        description: 'Cover all methods in the UserService with unit tests.',
        status: 'completed',
        assignee: 'user456',
        amount: 200,
        completionDate: new Date("2023-08-15"),
      },
      {
        id: '5',
        name: 'Optimize Image Loading',
        description: 'Implement lazy loading for images in the product gallery.',
        status: 'available',
        assignee: null,
        amount: 50
      },
      {
        id: "6",
        name: "Task 6",
        description: "Description for task 6",
        status: "completed",
        amount: 123,
        completionDate: new Date("2022-02-26")
      },
      {
        id: "7",
        name: "Task 7",
        description: "Description for task 7",
        status: "completed",
        amount: 194,
        completionDate: new Date("2020-05-18")
      },
      {
        id: "8",
        name: "Task 8",
        description: "Description for task 8",
        status: "completed",
        amount: 168,
        completionDate: new Date("2023-11-07")
      },
      {
        id: "9",
        name: "Task 9",
        description: "Description for task 9",
        status: "completed",
        amount: 77,
        completionDate: new Date("2023-07-21")
      },
      {
        id: "10",
        name: "Task 10",
        description: "Description for task 10",
        status: "completed",
        amount: 81,
        completionDate: new Date("2023-04-12")
      }
    ]);
  }

  getAvailableTasks() {
    return this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.status === 'available'))
    );
  }

  getCompletedTasks() {
    return this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.status === 'completed'))
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
  unassignTaskFromUser(task: Task) {
    const updatedTasks = this.tasksSubject.value.map(t => {
      if (t.id === task.id) {
        return { ...t, status: 'available' as 'available', assignee: null };
      }
      return t;
    });

    this.tasksSubject.next(updatedTasks);
  }
  markTaskAsCompleted(task: Task, userId: string) {
    const updatedTasks = this.tasksSubject.value.map(t => {
      if (t.id === task.id) {
        return { ...t, status: 'completed' as 'completed', assignee: userId, completionDate: new Date() };
      }
      return t;
    });

    this.tasksSubject.next(updatedTasks);
  }
}
