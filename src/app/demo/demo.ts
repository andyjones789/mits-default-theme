import { Component } from '@angular/core';

import { USER } from '../user';
import { SidebarMenu } from '../../mits-default-theme/scripts';

@Component({
  templateUrl: './demo.html'
})
export class DemoComponent {
  sections: SidebarMenu = {
    items: [
      {
        title: 'Dashboard',
        url: 'dashboard',
        icon: 'home'
      },
      {
        title: 'Users',
        url: 'users',
        icon: 'supervisor_account'
      },
      {
        title: 'Customers',
        url: 'customers',
        icon: 'dns'
      },
      {
        title: 'Timesheets',
        url: 'timesheets',
        newItems: 3,
        icon: 'access_time'
      },
      {
        title: 'Administration',
        url: 'administration',
        icon: 'build'
      },
      {
        title: 'Reports',
        url: 'reports',
        icon: 'insert_chart_outlined'
      }
    ]
  };

  user = USER;
}
