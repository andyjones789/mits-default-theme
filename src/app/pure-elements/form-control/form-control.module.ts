import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentNamerModule, StringFormatter } from '../core';
import { PureFormControl } from './form-control';
import { PurePrefix } from './prefix';
import { PureSuffix } from './suffix';
import { PureAsteriskModule } from '../asterisk/asterisk.module';
import { PureLabelModule } from '../label/label.module';
import { PureMessageModule } from '../message/message.module';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    ComponentNamerModule.forRoot(),
    PureAsteriskModule,
    PureLabelModule,
    PureMessageModule
  ],
  declarations: [PureFormControl, PurePrefix, PureSuffix],
  providers: [StringFormatter],
  exports: [PureFormControl, PurePrefix, PureSuffix]
})
export class PureFormControlModule {
}
