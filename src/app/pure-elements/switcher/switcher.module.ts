import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureSwitcher } from './switcher';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureSwitcher],
  exports: [PureSwitcher]
})
export class PureSwitcherModule {
}
