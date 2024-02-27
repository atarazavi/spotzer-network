import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { UnitTestingModule } from '#shared/test/unit-testing.module';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { FormsModule } from '@angular/forms';

class MockAuthService {
  signIn(email: string, password: string) { }
}

class MockRouter {
  navigate(commands: any[]) { }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        FormsModule,
        UnitTestingModule,
      ],
      providers: [
        { provide: AuthService, useClass: MockAuthService },
        { provide: Router, useClass: MockRouter }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    // Setting up spies
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    spyOn(authService, 'signIn');
    spyOn(router, 'navigate');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call signIn method of AuthService with correct parameters', () => {
    const email = 'test@example.com';
    const password = 'password123';
    component.email = email;
    component.password = password;

    component.signIn();

    expect(authService.signIn).toHaveBeenCalledWith(email, password);
  });

  it('should navigate to "/register" when register is called', () => {
    component.register();

    expect(router.navigate).toHaveBeenCalledWith(['/register']);
  });
});