import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProfileCardComponent } from './profile-card.component';
import { SharedModule } from '#shared/shared.module';

@NgModule({
  declarations: [ProfileCardComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
  ],
  exports: [ProfileCardComponent]
})
export class ProfileCardModule { }
