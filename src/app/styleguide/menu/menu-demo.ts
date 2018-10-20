import { Component } from '@angular/core';

@Component({
  templateUrl: './menu-demo.html'
})
export class MenuDemo {
  links = [
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
