import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TasksListComponent } from './tasks-list.component';
import { TasksService } from '#shared/services/tasks/tasks.service';
import { AuthService } from '#shared/services/auth/auth.service';
import { of } from 'rxjs';
import { Task } from '#shared/models/task.model';
import { UnitTestingModule } from '#shared/test/unit-testing.module';

describe('TasksListComponent', () => {
  let component: TasksListComponent;
  let fixture: ComponentFixture<TasksListComponent>;
  let mockTasksService: any;
  let mockAuthService: any;

  beforeEach(async () => {
    // Mock TasksService
    mockTasksService = jasmine.createSpyObj('TasksService', [
      'getAvailableTasks',
      'getAssignedTasks',
      'assignTaskToUser',
      'unassignTaskFromUser',
      'markTaskAsCompleted'
    ]);
    // Setup return values for the mocked service methods to return empty observables initially
    mockTasksService.getAvailableTasks.and.returnValue(of([]));
    mockTasksService.getAssignedTasks.and.returnValue(of([]));
    mockTasksService.tasksSubject = { value: [] }; // Add any other mock properties as needed

    // Mock AuthService
    mockAuthService = jasmine.createSpyObj('AuthService', ['getUserId']);
    mockAuthService.getUserId.and.returnValue(of('testUserId'));

    await TestBed.configureTestingModule({
      declarations: [TasksListComponent],
      imports: [
        UnitTestingModule,
      ],
      providers: [
        { provide: TasksService, useValue: mockTasksService },
        { provide: AuthService, useValue: mockAuthService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TasksListComponent);
    component = fixture.componentInstance;
    // Now, because the observables are mocked to return empty arrays, ngOnInit will not throw an error
    fixture.detectChanges(); // ngOnInit is called here
  });


  it('should filter available and assigned tasks on init', () => {
    const availableTasksMock = [
      { id: 1, status: 'available' },
      { id: 2, status: 'available' }
    ];
    const assignedTasksMock = [
      { id: 3, status: 'assigned', assignee: 'testUserId' }
    ];

    mockTasksService.getAvailableTasks.and.returnValue(of(availableTasksMock));
    mockTasksService.getAssignedTasks.and.returnValue(of(assignedTasksMock));

    component.ngOnInit();

    expect(component.availableTasks.length).toBe(2);
    expect(component.inProgressTasks.length).toBe(1);
  });

  it('should call assignTaskToUser if user ID is present', () => {
    const taskMock: Task = { id: '4', status: 'available', description: 'desc', name: 'name', amount: 10 };
    component.assignTask(taskMock);

    expect(mockTasksService.assignTaskToUser).toHaveBeenCalledWith(taskMock, 'testUserId');
  });

  it('should call unassignTaskFromUser if user ID matches task assignee', () => {
    const taskMock: Task = { id: '3', status: 'assigned', assignee: 'testUserId', description: 'desc', name: 'name', amount: 10 };
    component.unassignTask(taskMock);

    expect(mockTasksService.unassignTaskFromUser).toHaveBeenCalledWith(taskMock);
  });

  it('should call markTaskAsCompleted if user ID matches task assignee', () => {
    const taskMock: Task = { id: '5', status: 'assigned', assignee: 'testUserId', description: 'desc', name: 'name', amount: 10 };
    component.completeTask(taskMock);

    expect(mockTasksService.markTaskAsCompleted).toHaveBeenCalledWith(taskMock, 'testUserId');
  });

});
