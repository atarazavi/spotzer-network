import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidenavListItemComponent } from './sidenav-list-item.component';
import { SharedModule } from '#shared/shared.module';

@NgModule({
  declarations: [
    SidenavListItemComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [SidenavListItemComponent]
})
export class SidenavListItemModule { }
