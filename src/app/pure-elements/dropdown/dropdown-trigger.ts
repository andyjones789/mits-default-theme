import { Directive, Input, HostListener } from '@angular/core';

import { KEY_CODES } from '../core';
import { PureDropdown } from './dropdown';

@Directive({
  selector: '[pureDropdownTriggerFor]',
  host: {
    '(click)': 'onClick($event)'
  },
  exportAs: 'pureDropdownTrigger'
})
export class PureDropdownTrigger {
  isOpened: boolean = false;

  @Input('pureDropdownTriggerFor') menu: PureDropdown;

  onClick() {
    this.openMenu();
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (event.which === KEY_CODES.ESCAPE && this.isOpened) {
      this.closeMenu();
    }
  }

  openMenu(): void {
    this.menu.show = true;
    this.isOpened = true;
  }

  closeMenu(): void {
    this.menu.show = false;
    this.isOpened = false;
  }
}