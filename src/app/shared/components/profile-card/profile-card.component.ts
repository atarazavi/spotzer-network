import { Component, OnInit } from '@angular/core';

import { AuthService } from '#shared/services/auth/auth.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  userProfileEmailVerified: boolean | undefined;
  userProfileName: string | undefined;
  constructor(
    private readonly authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.signOut();
  }

  changePassword() {
    this.authService.changePassword();
  }
}
