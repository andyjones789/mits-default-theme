import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureModalWindow } from './modal-window';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureModalWindow],
  exports: [PureModalWindow]
})
export class PureModalWindowModule {
}
