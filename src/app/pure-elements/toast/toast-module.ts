import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ComponentNamerModule } from '../core';
import { PureSimpleToast } from './simple-toast';
import { PureToastContainer } from './toast-container';
import { PureButtonModule } from '../button';


@NgModule({
  imports: [
    OverlayModule,
    PortalModule,
    CommonModule,
    PureButtonModule,
    ComponentNamerModule,
  ],
  exports: [PureToastContainer, ComponentNamerModule],
  declarations: [PureToastContainer, PureSimpleToast],
  entryComponents: [PureToastContainer, PureSimpleToast],
})
export class PureToastModule {}
