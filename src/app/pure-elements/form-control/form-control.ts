import { Component, OnInit, AfterContentInit, Input, ElementRef, ViewChild, ContentChildren, QueryList, Optional, Inject, ContentChild } from '@angular/core';
import { startWith } from 'rxjs/operators'

import { ComponentNamer, PureComponent, ElementClasses } from '../core';
import { PureFormControlConfig, PureFormControlDefaultConfig, AsteriskPosition } from './form-control-config';
import { PureFormControlConfigToken } from './form-control-config-token';
import { PureLabel } from '../label';
import { PureInput } from '../input'
import { PurePrefix } from './prefix';
import { PureSuffix } from './suffix';
import { PureMessage } from '../message';


let nextUniqueId: number = 0;

@Component({
  selector: 'pure-form-control',
  template: `
    <div [ngClass]="elementClasses">

      <pure-label 
        *ngIf="label"
        [for]="id"
        [ngClass]="labelContainerClasses"
        theme="form-control">
        {{label}}

        <ng-container *ngIf="inputChild.required && asteriskPosition === 'label'">
          <ng-container *ngTemplateOutlet="asterisk"></ng-container>
        </ng-container>
      </pure-label>
      

      <div [ngClass]="inputContainerClasses">
        <div *ngIf="prefixChildren.length" [ngClass]="prefixContainerClasses">
          <ng-content select="[purePrefix]"></ng-content>
        </div>

        <ng-content select="[pureInput]"></ng-content>

        <span *ngIf="inputChild.type === 'checkbox' || inputChild.type === 'radio'" [ngClass]="toggleClasses"></span>

        <div *ngIf="suffixChildren.length" [ngClass]="suffixContainerClasses">
          <ng-content select="[pureSuffix]"></ng-content>
        </div>

        <ng-container *ngIf="inputChild.required && asteriskPosition === 'input'">
          <ng-container *ngTemplateOutlet="asterisk"></ng-container>
        </ng-container>
      </div>


      <ng-container *ngIf="inputChild.required && asteriskPosition === 'parent'">
        <ng-container *ngTemplateOutlet="asterisk"></ng-container>
      </ng-container>

      <div *ngIf="messageChildren.length" [ngClass]="messageContainerClasses">
        <ng-content select="pure-message"></ng-content>
      </div>
    </div>


    <ng-template #asterisk>
      <pure-asterisk theme="form-control"></pure-asterisk>
    </ng-template>
`
})
export class PureFormControl extends PureComponent implements OnInit, AfterContentInit, PureFormControlConfig {
  protected readonly elementName: string = 'Form Control';
  protected readonly labelContainerName: string = 'Label Holder';
  protected readonly inputContainerName: string = 'Input Holder';
  protected readonly toggleName: string = 'Toggle';
  protected readonly prefixContainerName: string = 'Prefix Holder';
  protected readonly suffixContainerName: string = 'Suffix Holder';
  protected readonly messagesContainerName: string = 'Messages';

  labelContainerClasses: ElementClasses = {};
  inputContainerClasses: ElementClasses = {};
  toggleClasses: ElementClasses = {};
  prefixContainerClasses: ElementClasses = {};
  suffixContainerClasses: ElementClasses = {};
  messageContainerClasses: ElementClasses = {};

  asteriskPosition: AsteriskPosition;

  id: string;

  @Input()
  get label(): string {
    return this._label;
  };
  set label(value) {
    const oldLabel = this.label;
    this._label = String(value);
    
    this.elementClasses[this.formControlStateClasses.label] = !!this._label;

    if (!oldLabel && this._label) {
      this.setIds();
    }
  }
  private _label: string;

  @ViewChild(PureLabel) labelChild: PureLabel;

  @ContentChild(PureInput) inputChild: PureInput;

  @ContentChildren(PurePrefix) prefixChildren: QueryList<PurePrefix>;
  @ContentChildren(PureSuffix) suffixChildren: QueryList<PureSuffix>;
  @ContentChildren(PureMessage) messageChildren: QueryList<PureMessage>;

  private inputStateClasses = {
    disabled:    this.componentNamer.generateClassName(this.elementName, '', 'disabled'),
    required:    this.componentNamer.generateClassName(this.elementName, '', 'required'),
    readonly:    this.componentNamer.generateClassName(this.elementName, '', 'readonly'),
    placeholder: this.componentNamer.generateClassName(this.elementName, '', 'has-placeholder'),
    empty:       this.componentNamer.generateClassName(this.elementName, '', 'empty'),
    focused:     this.componentNamer.generateClassName(this.elementName, '', 'focused')
  }

  private formControlStateClasses = {
    label:   this.componentNamer.generateClassName(this.elementName, '', 'has-label'),
    prefix:  this.componentNamer.generateClassName(this.elementName, '', 'has-prefix'),
    suffix:  this.componentNamer.generateClassName(this.elementName, '', 'has-suffix'),
    message: this.componentNamer.generateClassName(this.elementName, '', 'has-message')
  }

  private updateInputStateClasses(): void {
    this.elementClasses[this.inputStateClasses.empty]       = this.inputChild.empty;
    this.elementClasses[this.inputStateClasses.focused]     = this.inputChild.focused;
    this.elementClasses[this.inputStateClasses.disabled]    = this.inputChild.disabled;
    this.elementClasses[this.inputStateClasses.required]    = this.inputChild.required;
    this.elementClasses[this.inputStateClasses.readonly]    = this.inputChild.readonly;
    this.elementClasses[this.inputStateClasses.placeholder] = !!this.inputChild.placeholder;
  }

  private setChildrenClasses(flag: boolean = true): void {
    this.labelContainerClasses[this.componentNamer.generateClassName(this.elementName, this.labelContainerName)]      = flag;
    this.inputContainerClasses[this.componentNamer.generateClassName(this.elementName, this.inputContainerName)]      = flag;
    this.toggleClasses[this.componentNamer.generateClassName(this.elementName, this.toggleName)]                      = flag;
    this.prefixContainerClasses[this.componentNamer.generateClassName(this.elementName, this.prefixContainerName)]    = flag;
    this.suffixContainerClasses[this.componentNamer.generateClassName(this.elementName, this.suffixContainerName)]    = flag;
    this.messageContainerClasses[this.componentNamer.generateClassName(this.elementName, this.messagesContainerName)] = flag;
  }

  private setStaticStateClasses(): void {
    this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', this.inputChild.nodeName)] = true;
    this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', this.inputChild.type)]     = true; 

    this.elementClasses[this.formControlStateClasses.prefix]  = this.prefixChildren.length > 0;
    this.elementClasses[this.formControlStateClasses.suffix]  = this.suffixChildren.length > 0;
    this.elementClasses[this.formControlStateClasses.message] = this.messageChildren.length > 0;
  }

  private applyConfig(config: PureFormControlConfig): void {
    for (let key in config) {
      this[key] = config[key];
    }
  }

  private getId(): string {
    // If PureInput has id — use it. Otherwise, generate new unique ID.
    if (this.inputChild.id) {
      return this.inputChild.id;
    } else {
      return this.componentNamer.generateId(nextUniqueId++, this.elementName);
    }
  }

  private setIds(): void {
    // Get ID from PureInput or generate one.
    this.id = this.getId();

    // Set ID in case PureInput doesn't have it.
    if (this.inputChild.id !== this.id) {
      this.inputChild.id = this.id;
    }
  }

  constructor(public elementRef: ElementRef, 
              protected componentNamer: ComponentNamer,
              @Optional() @Inject(PureFormControlConfigToken) private config: PureFormControlConfig) {
    super(elementRef, componentNamer);
    
    const finalConfig: PureFormControlConfig = {...PureFormControlDefaultConfig, ...config};
    this.applyConfig(finalConfig);
  }

  ngOnInit() {
    super.ngOnInit();

    this.setChildrenClasses();
  }

  ngAfterContentInit() {
    this.setStaticStateClasses();

    if (this.label) {
      this.setIds();
    }

    this.inputChild.stateChanges.pipe(startWith<void>(null!)).subscribe(() => {
      this.updateInputStateClasses();
    });
  }
}