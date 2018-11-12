import { Component, ViewChild } from '@angular/core';

import { PureSelect } from 'pure-elements';

import { LibData } from '../../lib-data';

const USERS = [
  {
    "first_name": "Eve",
    "last_name": "Holt",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
  },
  {
    "first_name": "Charles",
    "last_name": "Morris",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
  },
  {
    "first_name": "Tracey",
    "last_name": "Ramos",
    "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
  }
];

@Component({
  templateUrl: './select-demo.html'
})
export class SelectDemo {
  LibData = LibData;

  placeholder: string = 'Select country';

  options = [
    { label: 'Canada', country: 'canada' },
    { label: 'China', country: 'china' },
    { label: 'Japan', country: 'japan' },
    { label: 'UK', country: 'uk' }
  ];

  users = [];

  searchTimeout = null;

  @ViewChild('apiSelect') apiSelect: PureSelect;

  searchUsers(event: Event): void {
    if (this.searchTimeout) clearTimeout(this.searchTimeout);

    // Simulate API request.
    this.searchTimeout = setTimeout(() => {
      console.info(event);

      this.users = this.getUsersList(this.apiSelect.baseInput.value);
    }, 1000);
  }

  private getUsersList(searchStr: string): any {
    if (!searchStr) return [];

    return USERS;
  }
}
