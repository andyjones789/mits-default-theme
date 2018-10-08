import { Component, OnInit, Input, ElementRef } from '@angular/core';

import { ComponentNamer, PureComponent } from '../core';

@Component({
  selector: 'pure-label',
  template: `
    <label 
      [for]="for"
      [ngClass]="elementClasses">
      <ng-content></ng-content>
    </label>
  `
})
export class PureLabel extends PureComponent implements OnInit {
  protected readonly elementName: string = 'Label';
  @Input() for: string;

  constructor(public elementRef: ElementRef, protected componentNamer: ComponentNamer) { 
    super(elementRef, componentNamer);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}
