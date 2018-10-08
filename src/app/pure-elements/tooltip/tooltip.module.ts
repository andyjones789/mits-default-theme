import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule, EventHandler } from '../core';
import { PureTooltip } from './tooltip';
import { PureTooltipComponent } from './tooltip-component';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureTooltipComponent, PureTooltip],
  exports: [PureTooltipComponent, PureTooltip],
  providers: [EventHandler],
  entryComponents: [PureTooltipComponent]
})
export class PureTooltipModule {
}
