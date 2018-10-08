import { Component, OnInit, Input, ElementRef, Output, EventEmitter, ViewChild } from '@angular/core';

import { ComponentNamer, PureComponent, ElementClasses, coerceBooleanProperty } from '../core';

let nextUniqueId: number = 0;

@Component({
  selector: 'pure-switcher',
  template: `
    <label 
      [for]="id"
      [ngClass]="elementClasses">

      <input 
        type="checkbox"
        [checked]="checked"
        [disabled]="disabled"
        [id]="id"
        [attr.name]="name"
        [required]="required"
        [ngClass]="inputClasses"
        (change)="onChange($event)"
        #input>

      <div
        [ngClass]="toggleContainerClasses">

        <div
          [ngClass]="toggleClasses">
        </div>
      </div>

      <span
        [ngClass]="labelContentClasses">

        <ng-content></ng-content>
      </span>
    </label>
  `
})
export class PureSwitcher extends PureComponent implements OnInit {
  protected readonly elementName: string = 'Switcher';
  protected readonly inputName: string = 'Input';
  protected readonly toggleContainerName: string = 'Toggle Container';
  protected readonly toggleName: string = 'Toggle';
  protected readonly labelContentName: string = 'Label Content';

  inputClasses: ElementClasses = {};
  toggleContainerClasses: ElementClasses = {};
  toggleClasses: ElementClasses = {};
  labelContentClasses: ElementClasses = {};

  private checkedClassName: string = this.componentNamer.generateClassName(this.elementName, '', 'checked');
  private disabledClassName: string = this.componentNamer.generateClassName(this.elementName, '', 'disabled');
  private requiredClassName: string = this.componentNamer.generateClassName(this.elementName, '', 'required');

  @ViewChild('input') inputElement: ElementRef;

  @Input() readonly id: string;
  @Input() readonly name: string;

  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value) {
    this._checked = coerceBooleanProperty(value);

    this.elementClasses[this.checkedClassName] = this._checked;
  }
  private _checked: boolean = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);

    this.elementClasses[this.disabledClassName] = this._disabled;
  }
  private _disabled: boolean = false;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value) {
    this._required = coerceBooleanProperty(value);

    this.elementClasses[this.requiredClassName] = this._required;
  }
  private _required: boolean = false;

  @Output() readonly change: EventEmitter<any> = new EventEmitter<any>();

  toggle(): void {
    this.checked = !this.checked;
  }

  onChange(event: Event): void {
    event.stopPropagation();

    this.checked = this.inputElement.nativeElement.checked;

    this.change.emit(event);
  }

  private setInnerElementsClasses(flag: boolean = true): void {
    this.inputClasses[this.componentNamer.generateClassName(this.elementName, this.inputName)] = flag;
    this.toggleContainerClasses[this.componentNamer.generateClassName(this.elementName, this.toggleContainerName)] = flag;
    this.toggleClasses[this.componentNamer.generateClassName(this.elementName, this.toggleName)] = flag;
    this.labelContentClasses[this.componentNamer.generateClassName(this.elementName, this.labelContentName)] = flag;
  }

  constructor(public elementRef: ElementRef, protected componentNamer: ComponentNamer) {
    super(elementRef, componentNamer);

    this.id = this.componentNamer.generateId(nextUniqueId, this.elementName);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setInnerElementsClasses();
  }
}
