import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentNamerModule } from '../core';
import { PureAsterisk } from './asterisk';
import { PureAsteriskContent } from './asterisk-content';

@NgModule({
  imports: [CommonModule, ComponentNamerModule.forRoot()],
  declarations: [PureAsterisk, PureAsteriskContent],
  exports: [PureAsterisk, PureAsteriskContent]
})
export class PureAsteriskModule {
}
