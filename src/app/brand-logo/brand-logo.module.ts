import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrandLogo } from './brand-logo';

@NgModule({
  imports: [ RouterModule ],
  declarations: [ BrandLogo ],
  exports: [ BrandLogo ]
})
export class BrandLogoModule { }
