import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoryComponent } from './history.component';
import { TasksService } from '#shared/services/tasks/tasks.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';
import { Task } from '#shared/models/task.model';
import { UnitTestingModule } from '#shared/test/unit-testing.module';

describe('HistoryComponent', () => {
  let component: HistoryComponent;
  let fixture: ComponentFixture<HistoryComponent>;
  let mockTasksService: any;

  beforeEach(async () => {
    mockTasksService = jasmine.createSpyObj('TasksService', ['getCompletedTasks']);

    // Mock the getCompletedTasks method to return an observable
    mockTasksService.getCompletedTasks.and.returnValue(of([])); // Start with an empty array or predefined tasks

    await TestBed.configureTestingModule({
      declarations: [HistoryComponent],
      imports: [
        UnitTestingModule,
        NoopAnimationsModule
      ],
      providers: [
        { provide: TasksService, useValue: mockTasksService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Now the subscribe method won't throw undefined error
  });


  // Test that the component correctly initializes and sets up the data source:
  it('should initialize dataSource with completed tasks', () => {
    const tasksMock: Task[] = [
      { name: 'Task 1', description: 'Description 1', status: 'completed', amount: 100, completionDate: new Date(), id: 'id1' },
      { name: 'Task 2', description: 'Description 2', status: 'completed', amount: 200, completionDate: new Date(), id: 'id2' },
    ];
    mockTasksService.getCompletedTasks.and.returnValue(of(tasksMock));

    component.ngOnInit();

    expect(component.dataSource.data).toEqual(tasksMock);
    expect(component.dataSource.sort).toBe(component.sort);
    expect(component.dataSource.paginator).toBe(component.paginator);
  });

  //Ensure the loadCompletedTasks method correctly updates the data source:
  it('should load completed tasks into the dataSource', () => {
    const completedTasksMock: Task[] = [
      { name: 'Task 2', description: 'Description 2', status: 'completed', amount: 200, completionDate: new Date(), id: 'id2' },
    ];
    mockTasksService.getCompletedTasks.and.returnValue(of(completedTasksMock));

    component.loadCompletedTasks();

    expect(component.dataSource.data).toEqual(completedTasksMock);
  });

  //Verify the filter functionality works as expected:
  it('should apply filter to dataSource', () => {
    const event = {
      target: { value: 'Task 1' }
    } as unknown as Event; // Simulate input event

    component.applyFilter(event);

    expect(component.dataSource.filter).toBe('task 1'); // filterValue should be lowercase
  });


});
