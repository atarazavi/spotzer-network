import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UnitTestingModule } from '#shared/test/unit-testing.module';

describe('AuthService', () => {
  let service: AuthService;
  let afAuthMock: any;
  let routerMock: any;

  beforeEach(() => {
    afAuthMock = {
      signInWithEmailAndPassword: jasmine.createSpy(),
      createUserWithEmailAndPassword: jasmine.createSpy(),
      signOut: jasmine.createSpy(),
      authState: of(null),
    };

    routerMock = {
      navigate: jasmine.createSpy('navigate')
    };

    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AngularFireAuth, useValue: afAuthMock },
        { provide: Router, useValue: routerMock }
      ],
      imports: [
        UnitTestingModule,
      ]
    });

    service = TestBed.inject(AuthService);
  });

  //signIn Method

  it('should navigate to "/tasks-list" on successful signIn', async () => {
    afAuthMock.signInWithEmailAndPassword.and.returnValue(Promise.resolve());
    await service.signIn('test@example.com', 'password');
    expect(routerMock.navigate).toHaveBeenCalledWith(['/tasks-list']);
  });

  it('should handle error on signIn failure', async () => {
    const consoleSpy = spyOn(console, 'error');
    afAuthMock.signInWithEmailAndPassword.and.returnValue(Promise.reject(new Error('Failed to sign in')));
    await service.signIn('wrong@example.com', 'wrongpassword');
    expect(consoleSpy).toHaveBeenCalledWith('Login failed', jasmine.any(Error));
  });

  //signUp Method

  it('should log "Registration successful" on successful signUp', async () => {
    const consoleSpy = spyOn(console, 'log');
    afAuthMock.createUserWithEmailAndPassword.and.returnValue(Promise.resolve());
    await service.signUp('test@example.com', 'password');
    expect(consoleSpy).toHaveBeenCalledWith('Registration successful');
  });

  it('should handle error on signUp failure', async () => {
    const consoleSpy = spyOn(console, 'error');
    afAuthMock.createUserWithEmailAndPassword.and.returnValue(Promise.reject(new Error('Failed to register')));
    await service.signUp('test@example.com', 'password');
    expect(consoleSpy).toHaveBeenCalledWith('Registration failed', jasmine.any(Error));
  });

  // signOut Method
  it('should navigate to "/login" on successful signOut', async () => {
    const consoleLogSpy = spyOn(console, 'log'); // Set up a spy for console.log
    afAuthMock.signOut.and.returnValue(Promise.resolve());
    await service.signOut();
    expect(consoleLogSpy).toHaveBeenCalledWith('Sign out successful'); // Verify console.log was called correctly
    expect(routerMock.navigate).toHaveBeenCalledWith(['/login']);
  });


  it('should handle error on signOut failure', async () => {
    const consoleSpy = spyOn(console, 'error');
    afAuthMock.signOut.and.returnValue(Promise.reject(new Error('Failed to sign out')));
    await service.signOut();
    expect(consoleSpy).toHaveBeenCalledWith('Sign out failed', jasmine.any(Error));
  });

  //Testing Observables

  it('should return null for getUserId if user is not authenticated', (done) => {
    service.getUserId().subscribe((userId) => {
      expect(userId).toBeNull();
      done();
    });
  });


});
