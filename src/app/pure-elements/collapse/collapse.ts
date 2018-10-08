import { OnInit, OnChanges, Component, Input, Output, EventEmitter, ElementRef, SimpleChanges, ContentChild, Optional, Inject } from '@angular/core';

import { PureComponent, ElementClasses, ComponentNamer, mixinStateClasses, CanRepresentState, States, coerceBooleanProperty } from '../core';
import { PureCollapseHeader } from './collapse-header';
import { PureCollapseFooter } from './collapse-footer';
import { PureCollapseConfig, PureCollapseDefaultConfig } from './collapse-config';
import { PureCollapseConfigToken} from './collapse-config-token';

export type CollapseState = boolean;

// Boilerplate for applying mixins to PureCollapse.
class PureCollapseBase extends PureComponent {
  constructor(public elementRef: ElementRef, protected componentNamer: ComponentNamer) {
    super(elementRef, componentNamer);
  }
}

const PureCollapseBaseMixin = mixinStateClasses(PureCollapseBase);

@Component({
  selector: 'pure-collapse',
  template: `
    <div 
      [ngClass]="elementClasses"
      (click)="onClick()">

      <div
        *ngIf="headerChild"
        [ngClass]="headerClasses"
        (click)="onHeaderClick()">

        <ng-content 
          select="[pureCollapseHeader]">
         </ng-content>
      </div>

      <div 
        [ngClass]="contentClasses">
        <ng-content></ng-content>
      </div>
      
      <div
        *ngIf="footerChild"
        [ngClass]="footerClasses"
        (click)="onFooterClick()">

        <ng-content 
          select="[pureCollapseFooter]">
         </ng-content>
      </div>
    </div>
  `
})
export class PureCollapse extends PureCollapseBaseMixin implements OnInit, OnChanges, CanRepresentState, PureCollapseConfig {
  protected readonly elementName: string = 'Collapse';
  protected readonly headerName: string = 'Header';
  protected readonly contentName: string = 'Content';
  protected readonly footerName: string = 'Footer';

  private headerClasses: ElementClasses = {};
  private contentClasses: ElementClasses = {};
  private footerClasses: ElementClasses = {};

  private config: PureCollapseConfig;

  states: States;

  collapseOnClick: boolean;
  collapseOnHeaderClick: boolean;
  collapseOnFooterClick: boolean;

  @Input() collapsedOnInit: boolean;

  @ContentChild(PureCollapseHeader) headerChild: PureCollapseHeader;
  @ContentChild(PureCollapseFooter) footerChild: PureCollapseFooter;

  @Output() open: EventEmitter<any> = new EventEmitter<any>();
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  @Input() openAnimationDuration: number;
  @Input() closeAnimationDuration: number;

  @Input() 
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled: boolean;

  @Input() 
  get collapse(): CollapseState {
    return this._collapse;
  }
  set collapse(value) {
    const previousValue = this.collapse;

    this._collapse = coerceBooleanProperty(value);

    this.updateState('collapse', this._collapse);
    this.setStateClasses();

    if (this._collapse) {
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
  };
  private _collapse: CollapseState;

  onClick() {
    if (this.config.collapseOnClick && !this.disabled) {
      this.collapse = !this.collapse;
    }
  }

  onHeaderClick() {
    if (this.config.collapseOnHeaderClick && !this.config.collapseOnClick && !this.disabled) {
      this.collapse = !this.collapse;
    }
  }

  onFooterClick() {
    if (this.config.collapseOnFooterClick && !this.config.collapseOnClick && !this.disabled) {
      this.collapse = !this.collapse;
    }
  }

  private initElementStates(): void {
    this.states.collapse = {
      class: this.componentNamer.generateClassName(this.elementName, '', 'collapsed'),
      isActive: false
    };
  }

  private setHeaderClasses(flag: boolean = true): void {
    this.headerClasses[this.componentNamer.generateClassName(this.elementName, this.headerName)] = flag;
  }

  private setContentClasses(flag: boolean = true): void {
    this.contentClasses[this.componentNamer.generateClassName(this.elementName, this.contentName)] = flag;
  }

  private setFooterClasses(flag: boolean = true): void {
    this.footerClasses[this.componentNamer.generateClassName(this.elementName, this.footerName)] = flag;
  }

  constructor(public elementRef: ElementRef, 
              protected componentNamer: ComponentNamer,
              @Optional() @Inject(PureCollapseConfigToken) private userConfig: PureCollapseConfig) {
    super(elementRef, componentNamer);

    this.config = {...PureCollapseDefaultConfig, ...userConfig};

    this.collapsedOnInit = this.config.collapsedOnInit;
    this.openAnimationDuration = this.config.openAnimationDuration;
    this.closeAnimationDuration = this.config.closeAnimationDuration;

    this.initElementStates();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.setStateClasses(changes);
  }

  ngOnInit() {
    super.ngOnInit();
    this.setHeaderClasses();
    this.setContentClasses();
    this.setFooterClasses();

    /** If `this.collapse` wasn't set through attribute — set it automatically. */
    if (this.collapse === undefined) {
      this.collapse = this.collapsedOnInit;
    }
  }
}