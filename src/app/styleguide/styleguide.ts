import { Component } from '@angular/core';

import { Links } from '../links';

@Component({
  templateUrl: './styleguide.html'
})
export class Styleguide {
  commonLinks: Links[] = [
    // {
    //   title: 'Sizes',
    //   url: 'sizes'
    // },
    {
      title: 'Colour Scheme',
      url: 'colour-scheme'
    },
    {
      title: 'Typography',
      url: 'typography'
    }
  ];

  objectsLinks: Links[] = [
    {
      title: 'Grid',
      url: 'grid'
    },
    {
      title: 'Controls',
      url: 'controls'
    }
  ];

  componentsLinks: Links[] = [
    {
      title: 'Badge',
      url: 'badge'
    },
    {
      title: 'Button',
      url: 'button'
    },
    {
      title: 'Card',
      url: 'card'
    },
    {
      title: 'Data Grid',
      url: 'data-grid'
    },
    {
      title: 'Dropdown',
      url: 'dropdown'
    },
    {
      title: 'Form Control',
      url: 'form-control'
    },
    {
      title: 'Icon',
      url: 'icon'
    },
    {
      title: 'Loading',
      url: 'loading'
    },
    {
      title: 'Menu',
      url: 'menu'
    },
    {
      title: 'Modal',
      url: 'modal'
    },
    {
      title: 'Round Badge',
      url: 'round-badge'
    },
    {
      title: 'Switcher',
      url: 'switcher'
    },
    {
      title: 'Toast',
      url: 'toast'
    },
    {
      title: 'Tooltip',
      url: 'tooltip'
    }
  ];
}
