import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createSpyFromClass, Spy } from 'jasmine-auto-spies';
import { of } from 'rxjs';

import { SidenavComponent } from './sidenav.component';
import { SharedModule } from '#shared/shared.module';


describe('SidenavComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
      imports: [SharedModule, BrowserAnimationsModule],
      providers: [
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('onSidenavStateChanged should work correctly and toggle state if TRUE is passed', () => {
    component.onSidenavStateChanged('true');
    expect(component.sidenavExtended).toBe(false);
  });

  it('onSidenavStateChanged should work correctly and toggle state if FALSE is passed', () => {
    component.onSidenavStateChanged('false');
    expect(component.sidenavExtended).toBe(true);
  });
});
