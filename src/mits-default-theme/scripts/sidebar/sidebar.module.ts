import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MitsSidebar } from './sidebar';

@NgModule({
  imports: [ CommonModule, RouterModule ],
  declarations: [ MitsSidebar ],
  exports: [ MitsSidebar ]
})
export class MitsSidebarModule {}