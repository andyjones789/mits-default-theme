import { Component } from '@angular/core';

import { PureToast } from 'pure-elements';
import { LibData } from '../../lib-data';

@Component({
  templateUrl: './toast-demo.html'
})
export class ToastDemo {
  LibData = LibData;
  
  showToast(): void {
    let toastRef = this.toast.open('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Dismiss');
    
    toastRef.onAction().subscribe(() => {
      console.log('Action was triggered!');
    });

    toastRef.afterDismissed().subscribe(() => {
      console.log('Dismissed!')
    });
  }

  constructor(private toast: PureToast) {}
}
