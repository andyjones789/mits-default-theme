import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { ComponentNamer, PureComponent } from '../core';

@Component({
  selector: 'pure-message',
  template: `
    <p 
      [ngClass]="elementClasses">
      <ng-content></ng-content>
    </p>
  `
})
export class PureMessage extends PureComponent implements OnInit {
  protected readonly elementName: string = 'Message';

  constructor(public elementRef: ElementRef, protected componentNamer: ComponentNamer) {
    super(elementRef, componentNamer);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
