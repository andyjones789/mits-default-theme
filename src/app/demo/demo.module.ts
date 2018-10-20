import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PureElements } from 'pure-elements';
import { MitsDefaultTheme } from '../../mits-default-theme/scripts'

import { DemoRoutingModule } from './demo-routing.module';
import { DemoComponent } from './demo';

import { BrandLogoModule } from '../brand-logo/brand-logo.module';
import { UsersList } from './users/users-list';

@NgModule({
  declarations: [
    DemoComponent, 
    UsersList
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    PureElements,
    MitsDefaultTheme,
    BrandLogoModule
  ]
})
export class DemoModule {}
