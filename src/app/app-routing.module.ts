import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router, NavigationEnd, NavigationStart } from '@angular/router';

import { StyleguideModule } from './styleguide/styleguide.module';

const routes: Routes = [
  { path: 'styleguide', loadChildren: './styleguide/styleguide.module#StyleguideModule' },
  { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },

  { path: '', pathMatch: 'full', redirectTo: 'styleguide' },
  { path: '**', redirectTo: 'styleguide' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
  bodyNoAnimClass: string = 'u-no-animations';

  constructor(router: Router) {

    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        document.body.classList.add(this.bodyNoAnimClass);
      }

      if (event instanceof NavigationEnd) {
        window.scroll(0, 0);

        setTimeout(() => {
          document.body.classList.remove(this.bodyNoAnimClass);
        })
      }
    });
  }
}
