import { Component } from '@angular/core';

import { SidebarMenus } from '../../mits-default-theme/scripts';

@Component({
  templateUrl: './styleguide.html'
})
export class Styleguide {
  menus: SidebarMenus = [
    {
      title: 'Introduction',
      items: [
        {
          title: 'Getting Started',
          url: 'getting-started'
        },
        {
          title: 'Demo Sample',
          url: '/demo',
          icon: 'exit_to_app'
        }
      ]
    },

    {
      title: 'Essentials',
      items: [
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
        },
        {
          title: 'Accessibility',
          url: 'accessibility'
        }
      ]
    },

    {
      title: 'Objects',
      items: [
        {
          title: 'Grid',
          url: 'grid'
        },
        {
          title: 'Controls',
          url: 'controls'
        }
      ]
    },

    {
      title: 'Components',
      items: [
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
      ]
    }
  ];
}
