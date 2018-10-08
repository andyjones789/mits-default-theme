import { Component, OnInit, Input, Output, ViewChild, ElementRef, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { ComponentNamer, PureComponent, States, CanDisable, mixinDisabled, CanRepresentState, mixinStateClasses } from '../core';

export type ButtonType = 'button' | 'reset' | 'submit' | 'image';

// Boilerplate for applying mixins to PureButton.
class PureButtonBase extends PureComponent {
  constructor(public elementRef: ElementRef, protected componentNamer: ComponentNamer) {
    super(elementRef, componentNamer);
  }
}

const PureButtonBaseMixin = mixinStateClasses(mixinDisabled(PureButtonBase));

@Component({
  selector: 'pure-button',
  template: `
    <button 
      *ngIf="!renderAs || renderAs === 'button'"
      [type]="type"
      [disabled]="disabled"
      [name]="name"
      [autofocus]="autofocus"
      [ngClass]="elementClasses"
      (click)="click($event)">
      <ng-container 
        *ngTemplateOutlet="content">
      </ng-container>
    </button>

    <a 
      *ngIf="renderAs === 'a'"
      [ngClass]="elementClasses"
      [href]="href"
      [download]="download"
      [rel]="rel"
      [target]="target"
      (click)="click($event)">
      <ng-container 
        *ngTemplateOutlet="content">
      </ng-container>
    </a>

    <input 
      *ngIf="renderAs === 'input'"
      [autofocus]="autofocus"
      [type]="type"
      [disabled]="disabled"
      [name]="name"
      [alt]="alt"
      [height]="height"
      [src]="src"
      [width]="width"
      [ngClass]="elementClasses"
      (click)="click($event)"/>

    <ng-template 
      #content>
      <ng-content></ng-content>
    </ng-template>
  `
})
export class PureButton extends PureButtonBaseMixin implements OnInit, CanRepresentState, CanDisable {
  protected readonly elementName: string = 'Button';
  
  @Input() type: ButtonType;
  @Input() disabled: boolean;
  @Input() name: string;
  @Input() autofocus: 'autofocus';
  @Input() renderAs: 'a' | 'button' | 'input' = 'button';

  @Input() href: string;
  @Input() download: string;
  @Input() rel: string;
  @Input() target: string;

  @Input() alt: string;
  @Input() height: number;
  @Input() src: string;
  @Input() width: number;

  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  states: States;

  private initElementStates(): void {
    this.states.disabled = {
      class: this.componentNamer.generateClassName(this.elementName, '', 'disabled'),
      isActive: this.disabled
    }
  }

  private setElAttrs(): void {
    switch (this.renderAs) {
      case 'a':
        this.href = this.href || '';
        this.download = this.download || '';
        this.rel = this.rel || '';
        this.target = this.target || '';

      case 'input':
        this.autofocus = this.autofocus || undefined;
        this.src = this.src || '';
        this.alt = this.alt || '';

      case 'button' || 'input':
        this.name = this.name || '';

      default:
        this.type = this.type || 'button';
        break;
    }
  }

  private click() {
    this.onClick.emit();
  }

  constructor(public elementRef: ElementRef, protected componentNamer: ComponentNamer) {
    super(elementRef, componentNamer);
    
    this.initElementStates();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setStateClasses(changes);
  }

  ngOnInit() {
    super.ngOnInit();

    this.setElAttrs();
  }
}