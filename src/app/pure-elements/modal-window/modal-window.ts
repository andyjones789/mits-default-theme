import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ElementRef, Optional, Inject } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { ComponentNamer, PureComponent, ElementClasses, mixinStateClasses, CanRepresentState, States, KEY_CODES, coerceBooleanProperty } from '../core';
import { PureModalWindowConfig, PureModalWindowDefaultConfig } from './modal-window-config';
import { PureModalWindowConfigToken } from './modal-window-config-token';

// Boilerplate for applying mixins to PureModalWindow.
class PureModalWindowBase extends PureComponent {
  constructor(public elementRef: ElementRef, protected componentNamer: ComponentNamer) {
    super(elementRef, componentNamer);
  }
}

const PureModalWindowBaseMixin = mixinStateClasses(PureModalWindowBase);

@Component({
  selector: 'pure-modal-window',
  template: `
    <div 
      [ngClass]="elementClasses">
      
      <div 
        [ngClass]="backdropClasses" 
        (click)="show = false">
      </div>

      <div 
        [ngClass]="contentClasses">
      
        <input 
          autofocus="true" 
          hidden/>
      
        <ng-content></ng-content>
      </div>
    </div>
  `
})
export class PureModalWindow extends PureModalWindowBaseMixin implements OnInit, AfterViewInit, OnDestroy, CanRepresentState {
  protected readonly elementName: string = 'Modal Window';
  protected readonly backdropName: string = 'Backdrop';
  protected readonly contentName: string = 'Content';
  protected readonly contentContainerName: string = 'Content Container';
  
  backdropClasses: ElementClasses = {};
  contentClasses: ElementClasses = {};

  private keyListenerBound;

  private config: PureModalWindowConfig;

  @Input() closeOnEsc: boolean;

  @Input() openAnimationDuration: number;
  @Input() closeAnimationDuration: number;

  states: States = {
    show: {
      class: this.componentNamer.generateClassName(this.elementName, '', 'shown'),
      isActive: false
    }
  }

  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  set show(value) {
    const previousValue = this.show;

    this._show = coerceBooleanProperty(value);

    this.updateState('show', this._show);
    this.setStateClasses();

    this.showChange.emit(value);

    if (this._show) {
      setTimeout(() => {
        this.open.emit();
      }, this.openAnimationDuration);
    } else {
      // Prevent close event emitting on initialisation when falsy value is set
      if (previousValue) { 
        setTimeout(() => {
          this.close.emit();
        }, this.closeAnimationDuration);
      }
    }
  }
  get show(): boolean {
    return this._show;
  }
  private _show: boolean = false;

  private keyListener(event): void {
    if (this.closeOnEsc && this.show && event.which === KEY_CODES.ESCAPE) {
      this.show = false;
    }
  }

  private setBackdropClasses(flag: boolean = true): void {
    this.backdropClasses[this.componentNamer.generateClassName(this.elementName, this.backdropName)] = flag;
  }

  private setContentClasses(flag: boolean = true): void {
    this.contentClasses[this.componentNamer.generateClassName(this.elementName, this.contentName)] = flag;
  }

  constructor(public elementRef: ElementRef, 
              protected componentNamer: ComponentNamer,
              @Optional() @Inject(PureModalWindowConfigToken) private userConfig: PureModalWindowConfig) {
    super(elementRef, componentNamer);
    this.keyListenerBound = this.keyListener.bind(this);

    this.config = {...PureModalWindowDefaultConfig, ...userConfig};

    this.closeOnEsc = this.config.closeOnEsc;
    this.openAnimationDuration = this.config.openAnimationDuration;
    this.closeAnimationDuration = this.config.closeAnimationDuration;
  }

  ngOnInit() {
    super.ngOnInit();
    this.setBackdropClasses();
    this.setContentClasses();
  }

  ngAfterViewInit() {
    document.addEventListener('keyup', this.keyListenerBound);
  }

  ngOnDestroy() {
    document.removeEventListener('keyup', this.keyListenerBound);
  }
}