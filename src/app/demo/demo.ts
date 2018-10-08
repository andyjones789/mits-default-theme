import { Component } from '@angular/core';

import { Links } from '../links';
import { USER } from '../user';

@Component({
  templateUrl: './demo.html'
})
export class DemoComponent {
  sections: Links[] = [
    {
      title: 'Dashboard',
      url: 'dashboard'
    },
    {
      title: 'Users',
      url: 'users'
    },
    {
      title: 'Customers',
      url: 'customers'
    },
    {
      title: 'Timesheets',
      url: 'timesheets',
      newItems: 3
    },
    {
      title: 'Administration',
      url: 'administration'
    },
    {
      title: 'Reports',
      url: 'reports'
    }
  ];

  user = USER;
}
