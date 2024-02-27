import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopRightToolsComponent } from './top-right-tools.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SharedModule } from '#shared/shared.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TopRightToolsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [TopRightToolsComponent]
})
export class TopRightToolsModule { }
