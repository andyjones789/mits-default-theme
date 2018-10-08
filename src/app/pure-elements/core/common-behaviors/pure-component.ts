import { Input, ViewChild, ElementRef, OnInit } from '@angular/core';

import { ComponentNamer, ElementClasses } from './../';

export type PureTheme = string;

export type PureExtraClass = string;

export class PureComponent {
  protected readonly elementName: string;

  protected isInitialised: boolean = false;

  elementClasses: ElementClasses = {};

  @Input() 
  get extraClass(): PureExtraClass {
    return this._extraClass;
  }
  set extraClass(value: PureExtraClass) {
    this._extraClass = value;
    if (value) {
      let extraClasses: PureExtraClass[] = value.split(' ');
      extraClasses.forEach((extraClass) => {
        if (extraClass) {
          this.elementClasses[extraClass] = true;
        };
      });
    };    
  }
  private _extraClass: PureExtraClass;

  @Input() 
  get theme(): PureTheme {
    return this._theme;
  }
  set theme(value: PureTheme) {
    this._theme = value;
    if (value) {
      let themes: PureTheme[] = value.split(' ');
      themes.forEach((theme) => {
        if (theme) {
          this.elementClasses[this.componentNamer.generateClassName(this.elementName, '', theme)] = true;
        };
      });
    };
  }
  private _theme: PureTheme;

  protected setElClasses(flag: boolean = true): void {
    this.elementClasses[this.componentNamer.generateClassName(this.elementName)] = flag;
  }

  constructor (public elementRef: ElementRef, 
               protected componentNamer: ComponentNamer) {
  }

  ngOnInit() {
    this.isInitialised = true;
    this.setElClasses();
  }
}