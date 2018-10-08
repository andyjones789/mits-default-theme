import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PureElements } from '../pure-elements';
import { BrandLogoModule } from '../brand-logo/brand-logo.module';

import { DemoRoutingModule } from './demo-routing.module';

import { DemoComponent } from './demo';

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
    BrandLogoModule
  ]
})
export class DemoModule { }
