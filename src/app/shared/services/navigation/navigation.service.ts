import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { NavigationItem } from '#shared/models/navigation-item.model';
import { NAVIGATION_CONFIGURATION } from './navigation-configuration';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements OnDestroy {

  private readonly destroyed$ = new Subject<void>();
  public allowedNavigationItems$ = new BehaviorSubject<NavigationItem[]>([]);;

  constructor(
  ) { }

  public loadNavigationItems(): NavigationItem[] {
    return NAVIGATION_CONFIGURATION;
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
