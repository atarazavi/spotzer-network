import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRightToolsComponent } from './top-right-tools.component';
import { SharedModule } from '#shared/shared.module';

describe('TopRightToolsComponent', () => {
  let component: TopRightToolsComponent;
  let fixture: ComponentFixture<TopRightToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [TopRightToolsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TopRightToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
