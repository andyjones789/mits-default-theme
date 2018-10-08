import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureCollapse } from './collapse';
import { PureCollapseHeader } from './collapse-header';
import { PureCollapseFooter } from './collapse-footer';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureCollapse, PureCollapseHeader, PureCollapseFooter],
  exports: [PureCollapse, PureCollapseHeader, PureCollapseFooter]
})
export class PureCollapseModule {
}
