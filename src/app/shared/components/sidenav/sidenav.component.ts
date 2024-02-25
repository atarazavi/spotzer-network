import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { NavigationItem } from '#shared/models/navigation-item.model';
import { NavigationService } from '#shared/services/navigation/navigation.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('sidenavAnimation', [
      state('extended, void', style({ width: '259px' })),
      state('collapsed', style({ width: '94px' })),
      transition('collapsed <=> extended',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('collapsed <=> void',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
    trigger('contentAnimation', [
      state('extended, void', style({ marginLeft: '259px' })),
      state('collapsed', style({ marginLeft: '94px' })),
      transition('collapsed <=> extended',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      transition('collapsed <=> void',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ])
  ],
})
export class SidenavComponent implements OnInit, OnDestroy {
  navigationItems: NavigationItem[];
  sidenavExtended: boolean;
  private readonly destroyed$ = new Subject<void>();
  toggleMenuIsHovered = false;

  constructor(
    private navigationService: NavigationService,
  ) {
    navigationService.loadNavigationItems();
  }

  ngOnInit() {
    this.navigationItems = this.navigationService.loadNavigationItems();
    if (window.innerWidth < 650) {
      this.sidenavExtended = false;
    }
  }

  onToggleSidenavClick() {
    this.sidenavExtended = !this.sidenavExtended;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
