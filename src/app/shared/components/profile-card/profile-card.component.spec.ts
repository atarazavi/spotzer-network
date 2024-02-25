import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPage } from '#shared/test/component-page';
import { ProfileCardComponent } from './profile-card.component';

class ProfileCardComponentPage extends ComponentPage<ProfileCardComponent> {
  usersEmail() {
    return this.querySelectorOnParentNode<HTMLElement>('.usersEmailVerification');
  }
  changePasswordButton() {
    return this.querySelectorOnParentNode<HTMLButtonElement>('.changePasswordButton');
  }
  logoutButton() {
    return this.querySelectorOnParentNode<HTMLButtonElement>('.logoutButton');
  }
}
describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;
  let page: ProfileCardComponentPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileCardComponent],
      providers: [
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardComponent);
    page = new ProfileCardComponentPage(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load users email', () => {
    expect(page.usersEmail().innerHTML).toContain('erified');
  });

});
