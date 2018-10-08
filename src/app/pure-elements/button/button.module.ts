import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureButton } from './button';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureButton],
  exports: [PureButton]
})
export class PureButtonModule {
}
