import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Styleguide } from './styleguide';

import { Intro } from './intro/intro';

import { BaseUnitDemo } from './base-unit/base-unit-demo';
import { ColourSchemeDemo } from './colour-scheme/colour-scheme-demo';
import { TypographyDemo } from './typography/typography-demo';

import { ControlsDemo } from './controls/controls-demo';
import { GridDemo } from './grid/grid-demo';

import { BadgeDemo } from './badge/badge-demo';
import { ButtonDemo } from './button/button-demo';
import { CardDemo } from './card/card-demo';
import { DataGridDemo } from './data-grid/data-grid-demo';
import { DropdownDemo } from './dropdown/dropdown-demo';
import { IconDemo } from './icon/icon-demo';
import { FormControlDemo } from './form-control/form-control-demo';
import { LoadingDemo } from './loading/loading-demo';
import { MenuDemo } from './menu/menu-demo';
import { ModalDemo } from './modal/modal-demo';
import { RoundBadgeDemo } from './round-badge/round-badge-demo';
import { SwitcherDemo } from './switcher/switcher-demo';
import { ToastDemo } from './toast/toast-demo';
import { TooltipDemo } from './tooltip/tooltip-demo';

const routes: Routes = [
  {
    path: '',
    component: Styleguide,
    children: [
      { path: 'getting-started', component: Intro },

      { path: 'sizes', component: BaseUnitDemo },
      { path: 'colour-scheme', component: ColourSchemeDemo },
      { path: 'typography', component: TypographyDemo },

      { path: 'controls', component: ControlsDemo },
      { path: 'grid', component: GridDemo },

      { path: 'badge', component: BadgeDemo },
      { path: 'button', component: ButtonDemo },
      { path: 'card', component: CardDemo },
      { path: 'data-grid', component: DataGridDemo },
      { path: 'dropdown', component: DropdownDemo },
      { path: 'icon', component: IconDemo },
      { path: 'form-control', component: FormControlDemo },
      { path: 'loading', component: LoadingDemo },
      { path: 'menu', component: MenuDemo },
      { path: 'modal', component: ModalDemo },
      { path: 'round-badge', component: RoundBadgeDemo },
      { path: 'switcher', component: SwitcherDemo },
      { path: 'toast', component: ToastDemo },
      { path: 'tooltip', component: TooltipDemo },

      { path: '', redirectTo: 'getting-started' },
      { path: '**', redirectTo: 'getting-started' }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StyleguideRoutingModule {}
