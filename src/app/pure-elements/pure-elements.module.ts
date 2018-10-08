import { NgModule } from '@angular/core';

import { PureAsteriskModule } from './asterisk';
import { PureButtonModule } from './button';
import { PureCollapseModule } from './collapse';
import { PureDropdownModule } from './dropdown';
import { PureMessageModule } from './message';
import { PureLabelModule } from './label';
import { PureInputModule } from './input';
import { PureModalWindowModule } from './modal-window';
import { PureFormControlModule } from './form-control';
import { PureSwitcherModule } from './switcher';
import { PureToastModule, PureToast } from './toast';
import { PureTooltipModule } from './tooltip';

import { ComponentNamerModule } from './core/component-namer';
import { StringFormatter } from './core/string-formatter';

@NgModule({
  imports: [
    ComponentNamerModule.forRoot()
  ],
  exports: [
    PureAsteriskModule,
    PureButtonModule,
    PureCollapseModule,
    PureDropdownModule,
    PureMessageModule,
    PureLabelModule,
    PureModalWindowModule,
    PureFormControlModule,
    PureSwitcherModule,
    PureToastModule,
    PureTooltipModule,
    PureInputModule
  ],
  providers: [
    StringFormatter,
    PureToast
  ]
})
export class PureElements {}
