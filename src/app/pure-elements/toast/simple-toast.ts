import { Component, ViewEncapsulation, Inject, ChangeDetectionStrategy, ElementRef } from '@angular/core';

import { PureToastRef } from './toast-ref';
import { PureToastData } from './toast-config';
import { ComponentNamer, PureComponent, ElementClasses } from '../core';

@Component({
  selector: 'pure-toast',
  template: `
    <div [ngClass]="elementClasses">
      <span [ngClass]="contentClasses">
        <h5 *ngIf="data.title" [ngClass]="titleClasses">{{data.title}}</h5>
        <p *ngIf="data.message" [ngClass]="messageClasses">{{data.message}}</p>
      </span>

      <span *ngIf="hasAction" [ngClass]="actionPanelClasses">
        <pure-button theme="toast" (onClick)="action()">{{data.action}}</pure-button>
      </span>
    </div>`
})
export class PureSimpleToast extends PureComponent {
  protected readonly elementName: string = 'Toast';
  protected readonly contentName: string = 'Content';
  protected readonly titleName: string = 'Title';
  protected readonly messageName: string = 'Message';
  protected readonly actionPanelName: string = 'Action Panel';

  contentClasses: ElementClasses = {};
  titleClasses: ElementClasses = {};
  messageClasses: ElementClasses = {};
  actionPanelClasses: ElementClasses = {};

  /** Data that was injected into the toast. */
  data: { 
    message: string, 
    action: string 
  };

  action(): void {
    this.toastRef.dismissWithAction();
  }

  /** If the action panel should be shown. */
  get hasAction(): boolean {
    return !!this.data.action;
  }

  constructor(
    public elementRef: ElementRef,
    protected componentNamer: ComponentNamer,
    public toastRef: PureToastRef<PureSimpleToast>,
    @Inject(PureToastData) data: any) {
    super(elementRef, componentNamer);

    this.data = data;
  }

  ngOnInit() {
    super.ngOnInit();
    
    this.contentClasses[this.componentNamer.generateClassName(this.elementName, this.contentName)] = true;
    this.titleClasses[this.componentNamer.generateClassName(this.elementName, this.titleName)] = true;
    this.messageClasses[this.componentNamer.generateClassName(this.elementName, this.messageName)] = true;
    this.actionPanelClasses[this.componentNamer.generateClassName(this.elementName, this.actionPanelName)] = true;
  }
}
