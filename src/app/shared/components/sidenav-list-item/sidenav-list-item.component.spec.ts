import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavListItemComponent } from './sidenav-list-item.component';
import { SharedModule } from '#shared/shared.module';

describe('SidenavListItemComponent', () => {
  let component: SidenavListItemComponent;
  let fixture: ComponentFixture<SidenavListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavListItemComponent],
      imports: [SharedModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavListItemComponent);
    component = fixture.componentInstance;
    component.navigationItemDetails = { displayName: 'xyz', icon: 'xyz', link: 'xyz', allowedPermissions: [''] };
    component.collapsed = false;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
