import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  signUp() {
    this.authService.signUp(this.email, this.password);
  }
}
