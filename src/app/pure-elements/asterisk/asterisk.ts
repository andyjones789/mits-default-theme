import { OnInit, Component, ElementRef, Inject, Optional, ContentChildren, QueryList } from '@angular/core';

import { PureComponent, ComponentNamer } from '../core';
import { PureAsteriskConfig, PureAsteriskDefaultConfig } from './asterisk-config';
import { PureAsteriskConfigToken } from './asterisk-config-token';
import { PureAsteriskContent } from './asterisk-content';

@Component({
  selector: 'pure-asterisk',
  template: `
    <span [ngClass]="elementClasses">
      <ng-container *ngIf="content && !asteriskContentChildren.length">
        {{content}}
      </ng-container>

      <ng-content 
        *ngIf="asteriskContentChildren.length" 
        select="[pureAsteriskContent]">
      </ng-content>
    </span>
  `
})
export class PureAsterisk extends PureComponent implements OnInit, PureAsteriskConfig {
  protected readonly elementName: string = 'Asterisk';
  
  content: any;

  @ContentChildren(PureAsteriskContent) asteriskContentChildren: QueryList<PureAsteriskContent>;

  private applyConfig(config: PureAsteriskConfig): void {
    for (let key in config) {
      this[key] = config[key];
    }
  }

  constructor(public elementRef: ElementRef, 
              protected componentNamer: ComponentNamer, 
              @Optional() @Inject(PureAsteriskConfigToken) private config: PureAsteriskConfig) {
    super(elementRef, componentNamer);

    const finalConfig: PureAsteriskConfig = Object.assign(PureAsteriskDefaultConfig, config);
    this.applyConfig(finalConfig);
  }

  ngOnInit() {
    super.ngOnInit();
  }
}