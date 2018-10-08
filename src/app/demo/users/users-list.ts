import { Component } from '@angular/core';

import { USERS } from '../../users';

@Component({
  templateUrl: './users-list.html'
})
export class UsersList {
  users = USERS;
}
