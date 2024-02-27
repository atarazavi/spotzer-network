import { TestBed } from '@angular/core/testing';
import { TasksService } from './tasks.service';
import { Task } from '#shared/models/task.model';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TasksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter available tasks correctly', (done) => {
    service.getAvailableTasks().subscribe(tasks => {
      expect(tasks.every(task => task.status === 'available')).toBeTrue();
      done();
    });
  });

  it('should filter completed tasks correctly', (done) => {
    service.getCompletedTasks().subscribe(tasks => {
      expect(tasks.every(task => task.status === 'completed')).toBeTrue();
      done();
    });
  });

  it('should filter assigned tasks correctly', (done) => {
    service.getAssignedTasks().subscribe(tasks => {
      expect(tasks.every(task => task.assignee !== null)).toBeTrue();
      done();
    });
  });

  it('should assign a task to a user correctly', () => {
    const testTask: Task = { id: '2', name: 'Test Task', description: '', status: 'available', assignee: null, amount: 100 };
    service.assignTaskToUser(testTask, 'user123');
    service.tasks$.subscribe(tasks => {
      const updatedTask = tasks.find(task => task.id === testTask.id);
      expect(updatedTask?.assignee).toEqual('user123');
      expect(updatedTask?.status).toEqual('assigned');
    });
  });

  it('should unassign a task from a user correctly', () => {
    const testTask: Task = { id: '3', name: 'Test Task', description: '', status: 'assigned', assignee: 'user123', amount: 100 };
    service.unassignTaskFromUser(testTask);
    service.tasks$.subscribe(tasks => {
      const updatedTask = tasks.find(task => task.id === testTask.id);
      expect(updatedTask?.assignee).toBeNull();
      expect(updatedTask?.status).toEqual('available');
    });
  });

  it('should mark a task as completed correctly', () => {
    const testTask: Task = { id: '1', name: 'Test Task', description: '', status: 'assigned', assignee: 'user123', amount: 100 };
    service.markTaskAsCompleted(testTask, 'user123');
    service.tasks$.subscribe(tasks => {
      const updatedTask = tasks.find(task => task.id === testTask.id);
      expect(updatedTask?.status).toEqual('completed');
      expect(updatedTask?.assignee).toEqual('user123');
      expect(updatedTask?.completionDate).toBeDefined();
    });
  });
});
