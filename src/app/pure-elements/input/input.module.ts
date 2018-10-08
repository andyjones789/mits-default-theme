import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureFormControlModule } from '../form-control';
import { PureInput } from './input';

@NgModule({
  declarations: [
    PureInput
  ],
  imports: [
    CommonModule,
    ComponentNamerModule.forRoot()
  ],
  exports: [
    PureInput
  ]
})
export class PureInputModule {}