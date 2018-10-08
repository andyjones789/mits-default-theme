import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureDropdown } from './dropdown';
import { PureDropdownTrigger } from './dropdown-trigger';
import { PureDropdownItem } from './dropdown-item';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureDropdown, PureDropdownTrigger, PureDropdownItem],
  exports: [PureDropdown, PureDropdownTrigger, PureDropdownItem]
})
export class PureDropdownModule {}
