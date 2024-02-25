import { Component, Input } from '@angular/core';

import { NavigationItem } from '#shared/models/navigation-item.model';

@Component({
  selector: 'app-sidenav-list-item',
  templateUrl: './sidenav-list-item.component.html',
  styleUrls: ['./sidenav-list-item.component.scss']
})
export class SidenavListItemComponent {
  @Input() collapsed: boolean;
  @Input() navigationItemDetails: NavigationItem;
}
