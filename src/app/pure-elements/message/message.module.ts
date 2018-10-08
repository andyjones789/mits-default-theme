import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureMessage } from './message';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureMessage],
  exports: [PureMessage]
})
export class PureMessageModule {
}
