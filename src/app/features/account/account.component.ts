import { AuthService } from '#shared/services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  userEmail: string | null = '';

  constructor(private authService: AuthService) {
    this.authService.afAuth.authState.subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  signOut() {
    this.authService.signOut();
  }
}
