import { Component, Input, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

import { ComponentNamer, PureComponent, coerceBooleanProperty } from '../core';

@Component({
  selector: '[pureDropdownItem]',
  template: `
    <div [ngClass]="elementClasses" 
         (click)="onClick($event)" 
         (mousedown)="onMousedown($event)">
      <ng-content></ng-content>
    </div>
  `,
  host: {
    'attr.disabled': 'disabled'
  }
})
export class PureDropdownItem extends PureComponent implements OnInit, OnDestroy {
  protected readonly elementName: string = 'Dropdown Item';

  private readonly disabledClassName: string;
  private readonly focusedClassName: string;

  @Input('pureDropdownItemDisabled') 
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);

    this.elementClasses[this.disabledClassName] = this._disabled;
  }
  private _disabled: boolean = false;

  get focused(): boolean {
    return this._focused;
  }
  set focused(value: boolean) {
    this._focused = coerceBooleanProperty(value);
    
    this.elementClasses[this.focusedClassName] = this._focused;
  }
  private _focused: boolean = false;

  readonly onClickChanges: Subject<void> = new Subject<void>();
  readonly onMousedownChanges: Subject<void> = new Subject<void>();

  onClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.onClickChanges.next();
  }

  onMousedown(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.onMousedownChanges.next();
  }

  /** Performs the same action as on mouse click. */
  click() {
    this.elementRef.nativeElement.click();
  }

  constructor(public elementRef: ElementRef,
              protected componentNamer: ComponentNamer) {
    super(elementRef, componentNamer);

    this.disabledClassName = this.componentNamer.generateClassName(this.elementName, '', 'disabled');
    this.focusedClassName = this.componentNamer.generateClassName(this.elementName, '', 'focused');
  }

  ngOnInit() {
    super.ngOnInit();
  }

  ngOnDestroy() {
    this.onClickChanges.complete();
    this.onMousedownChanges.complete();
  }
}