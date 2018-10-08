import { OnInit, OnDestroy, OnChanges, Directive, Input, ElementRef, Optional, Self, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

import { PureComponent, ComponentNamer, coerceBooleanProperty } from '../core';
import { getPureInputUnsupportedTypeError } from './input-errors';

// Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.
const PureInputIvalidTypes = [
  'button',
  'file',
  'hidden',
  'image',
  'range',
  'reset',
  'submit'
];

/** Directive that allows a native input to work inside a Pure Form Control. */
@Directive({
  selector: 'input[pureInput], textarea[pureInput], select[pureInput]',
  exportAs: 'pureInput',
  host: {
    // Native input properties that are overwritten by Angular inputs need to be synced with
    // the native input element. Otherwise property bindings for those don't work.
    '[attr.id]': 'id',
    '[attr.placeholder]': 'placeholder',
    '[disabled]': 'disabled',
    '[required]': 'required',
    '[attr.readonly]': 'readonly && !isSelect() || null',

    '(focus)': 'onFocusChange(true)',
    '(blur)': 'onFocusChange(false)'
  }
})
export class PureInput extends PureComponent implements OnInit, OnDestroy, OnChanges {
  protected readonly elementName: string = 'Input';

  protected neverEmptyInputTypes = [
    'date',
    'datetime',
    'datetime-local',
    'month',
    'time',
    'week'
  ];

  @Input() placeholder: string;

  @Input() id: string;

  readonly stateChanges: Subject<void> = new Subject<void>();

  /** Whether element is disabled. */
  @Input()
  get disabled(): boolean { 
    if (this.ngControl && this.ngControl.disabled !== null) {
      return this.ngControl.disabled;
    }
    return this._disabled; 
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value); 

    this.stateChanges.next();
  }
  private _disabled: boolean = false;

  /** Whether element is focused. */
  focused: boolean = false;
  
  focus(): void {
    this.elementRef.nativeElement.focus();
    this.onFocusChange(true);
  };

  blur(): void {
    this.elementRef.nativeElement.blur(); 
    this.onFocusChange(false);
  }

  /** Whether element is required. */
  @Input()
  get required(): boolean {
    return this._required; 
  }
  set required(value) { 
    this._required = coerceBooleanProperty(value);

    this.stateChanges.next();
  }
  private _required = false;

  /** Whether element is readonly. */
  @Input()
  get readonly(): boolean {
    return this._readonly; 
  }
  set readonly(value) { 
    this._readonly = coerceBooleanProperty(value); 

    this.stateChanges.next();
  }
  private _readonly = false;

  /** Value of the element. */
  @Input() 
  get value(): string {
    return this.elementRef.nativeElement.value; 
  }
  set value(value: string) {
    if (value !== this.value) {
      this.elementRef.nativeElement.value = value;
    }

    this.stateChanges.next();
  }

  /** Checks whether current element has value. */
  get empty(): boolean {
    return !this.isNeverEmpty() && !this.value;
  }

  /** Checked state for checkbox & radio types. */
  @Input()
  get checked(): boolean {
    return this._checked;
  }
  set checked(value: boolean) {
    this._checked = value;
  }
  private _checked: boolean = false;

  /** Input type of the element. */
  @Input()
  get type(): string { 
    return this._type;
  }
  set type(value: string) {
    this._type = value || 'text';

    if (PureInputIvalidTypes.indexOf(this._type) > -1) {
      throw getPureInputUnsupportedTypeError(this._type);
    }

    // When using Angular inputs, developers are no longer able to set the properties on the native
    // input element. To ensure that bindings for `type` work, we need to sync the setter
    // with the native property. Textarea & Select don't support the type attribute.
    if (this.isInput()) {
      this.elementRef.nativeElement.type = this._type;
    }

    this.stateChanges.next();
  }
  private _type: string;

  get nodeName(): string { 
    return this.elementRef.nativeElement.nodeName.toLowerCase();
  }

  onFocusChange(value: boolean): void {
    if (value !== this.focused) {
      this.focused = value;

      this.stateChanges.next();
    }
  }

  @HostListener('input')
  onInput(): void {
    this.stateChanges.next();
  }

  /** Checks whether the input type is one of the types that are never empty. */
  private isNeverEmpty() {
    return this.neverEmptyInputTypes.indexOf(this.type) > -1;
  }

  private isInput() {
    return this.nodeName === 'input'; 
  }

  private isSelect() {
    return this.nodeName === 'select'; 
  }

  private setClassesForHost(): void {
    for (let elementClass in this.elementClasses) {
      if (this.elementClasses[elementClass]) {
        this.elementRef.nativeElement.classList.add(elementClass);
      } else {
        this.elementRef.nativeElement.classList.remove(elementClass);
      }
    }
  }

  constructor(public elementRef: ElementRef, 
              protected componentNamer: ComponentNamer,
              @Optional() @Self() public ngControl: NgControl) {
    super(elementRef, componentNamer);
  }

  ngOnChanges() {
    if (this.isInitialised) {
      this.stateChanges.next();
    }
  }

  ngOnInit() {
    super.ngOnInit();
    
    this.setClassesForHost();
  }

  ngOnDestroy() {
    this.stateChanges.complete();
  }
}