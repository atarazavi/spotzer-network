import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountComponent } from './account.component';
import { AuthService } from '#shared/services/auth/auth.service';
import { of } from 'rxjs';
import { UnitTestingModule } from '#shared/test/unit-testing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  let authService: AuthService;

  beforeEach(async () => {
    const authServiceMock = {
      afAuth: {
        authState: of({ email: 'test@example.com' }) // Mock authState observable
      },
      signOut: jasmine.createSpy('signOut')
    };

    await TestBed.configureTestingModule({
      declarations: [AccountComponent],
      imports: [
        UnitTestingModule,
        AngularFireModule.initializeApp(environment.firebaseConfig),
        AngularFireAuthModule
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set userEmail after component initialization', () => {
    // Assert that userEmail is set correctly after authService.authState emits a user
    expect(component.userEmail).toEqual('test@example.com');
  });

  it('should call signOut method of AuthService when signOut is called', () => {
    // Act
    component.signOut();

    // Assert that authService's signOut method was called
    expect(authService.signOut).toHaveBeenCalled();
  });
});
