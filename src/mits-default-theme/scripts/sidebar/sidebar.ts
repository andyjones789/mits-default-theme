import { Component, Input } from '@angular/core';

import { SidebarMenus } from './menus';

@Component({
  selector: 'mits-sidebar',
  templateUrl: './sidebar.html'
})
export class MitsSidebar {
  @Input() menus: SidebarMenus = [];

  @Input() contentState: 'default' | 'expanded' = 'default';

  toggleContentState(): void {
    this.contentState === 'default' ? this.contentState = 'expanded' : this.contentState = 'default';
  }
}