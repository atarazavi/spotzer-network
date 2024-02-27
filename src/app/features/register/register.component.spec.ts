import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { UnitTestingModule } from '#shared/test/unit-testing.module';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    const authServiceMock = {
      signUp: jasmine.createSpy('signUp')
    };

    await TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        ReactiveFormsModule, // Required for form controls
        FormsModule, // If needed for your setup
        UnitTestingModule,
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock } // Mock AuthService
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService); // Get the injected AuthService instance
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  it('email field validity', () => {
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    let errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Set email to a valid email
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
  });

  it('password field validity', () => {
    let password = component.registerForm.controls['password'];
    expect(password.valid).toBeFalsy();

    // Password field is required
    let errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set password to something shorter than 6 characters
    password.setValue("123");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set password to a valid value
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
  });

  it('submitting a form calls authService.signUp', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['email'].setValue("test@example.com");
    component.registerForm.controls['password'].setValue("123456");
    expect(component.registerForm.valid).toBeTruthy();

    // Try to submit the form
    component.signUp();

    // Check if signUp method in the AuthService has been called
    expect(authService.signUp).toHaveBeenCalledWith("test@example.com", "123456");
  });
});
