import { Component, OnInit, ViewChild, ElementRef, Inject, Optional } from '@angular/core';

import { PureComponent, ComponentNamer, coerceBooleanProperty, ElementClasses } from '../core';
import { PureTooltipComponentConfig } from './tooltip-config';

@Component({
  template: `
    <div [ngClass]="elementClasses">
      <div
        [ngClass]="containerClasses"
        #container>
        <ng-content></ng-content>
      </div>
      <div [ngClass]="appendixClasses"></div>
    </div>
  `
})
export class PureTooltipComponent extends PureComponent implements OnInit {
  protected readonly elementName: string = 'Tooltip';
  protected readonly containerName: string = 'Container';
  protected readonly appendixName: string = 'Appendix';

  containerClasses: ElementClasses = {};
  appendixClasses: ElementClasses = {};

  private readonly showClass: string = this.componentNamer.generateClassName(this.elementName, '', 'shown')

  get show(): boolean {
    return this._show;
  }
  set show(value: boolean) {
    this._show = coerceBooleanProperty(value);
    this.elementClasses[this.showClass] = this._show;
  }
  private _show: boolean = false;

  @ViewChild('container') container: ElementRef;

  private setContainerClasses(flag: boolean = true) {
    this.containerClasses[this.componentNamer.generateClassName(this.elementName, this.containerName)] = flag;
  }

  private setAppendixClasses(flag: boolean = true) {
    this.appendixClasses[this.componentNamer.generateClassName(this.elementName, this.appendixName)] = flag;
  }

  constructor(public elementRef: ElementRef, 
              protected componentNamer: ComponentNamer,
              @Optional() @Inject('pureTooltipConfig') private config: PureTooltipComponentConfig) {
    super(elementRef, componentNamer);

    if (config) {
      this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', this.config.position)] = true;
    }
  }

  ngOnInit() {
    super.ngOnInit();
    this.setContainerClasses();
    this.setAppendixClasses();
  }
}