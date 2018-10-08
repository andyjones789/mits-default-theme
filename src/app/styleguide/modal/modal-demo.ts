import { Component } from '@angular/core';

import { LibData } from '../../lib-data';

@Component({
  templateUrl: './modal-demo.html'
})
export class ModalDemo {
  LibData = LibData;
  
  showDialog: boolean = false;
  showWindow: boolean = false;

  deactivate() {
    this.showDialog = false;
  }

  create() {
    this.showWindow = false;
  }
}
