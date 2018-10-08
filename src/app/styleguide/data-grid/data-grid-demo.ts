import { Component } from '@angular/core';

import { USERS } from '../../users';

@Component({
  templateUrl: './data-grid-demo.html'
})
export class DataGridDemo {
  users = USERS;

  onRowClick(user) {
    alert(`🦄 I'm a click event with user data passed in!

${JSON.stringify(user, null, 2)}`);
  }
}
