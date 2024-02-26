import { Task } from '#shared/models/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [
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
  ];

  getAvailableTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'available');
  }

  getAssignedTasks(): Task[] {
    return this.tasks.filter(task => task.status === 'assigned' && task.assignee !== null);
  }
}
