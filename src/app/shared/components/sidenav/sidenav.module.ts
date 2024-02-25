import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidenavComponent } from './sidenav.component';
import { SidenavListItemModule } from '#shared/components/sidenav-list-item/sidenav-list-item.module';
import { TopRightToolsModule } from '../top-right-tools/top-right-tools.module';
import { SharedModule } from '#shared/shared.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    SidenavListItemModule,
    TopRightToolsModule,
    SharedModule,
  ],
  exports: [SidenavComponent]
})
export class SidenavModule { }
