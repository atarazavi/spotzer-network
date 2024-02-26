import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private readonly router: Router,
  ) { }

  signIn() {
    this.authService.signIn(this.email, this.password);
  }
  register() {
    this.router.navigate(['/register'])

  }
}
