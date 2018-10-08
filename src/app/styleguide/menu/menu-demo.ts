import { Component } from '@angular/core';

import { Links } from '../../links';

@Component({
  templateUrl: './menu-demo.html'
})
export class MenuDemo {
  links: Links[] = [
    {
      title: 'Menu item #1'
    },
    {
      title: 'Menu item #2'
    },
    {
      title: 'Item With Icon',
      icon: 'bookmark'
    },
    {
      title: 'Disabled one',
      disabled: true
    },
    {
      title: 'Menu item #5'
    },
  ];

  activeItem = this.links[0];
}
