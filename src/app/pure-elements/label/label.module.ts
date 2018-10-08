import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureLabel } from './label';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureLabel],
  exports: [PureLabel]
})
export class PureLabelModule {
}
