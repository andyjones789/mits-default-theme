import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PureElements, PureToastDefaultOptions, PureToastConfig } from 'pure-elements';
import { MitsDefaultTheme } from '../../mits-default-theme/scripts';
import { BrandLogoModule } from '../brand-logo/brand-logo.module';

import { StyleguideRoutingModule } from './styleguide-routing.module';

import { Styleguide } from './styleguide';

import { Intro } from './intro/intro';

import { BaseUnitDemo } from './base-unit/base-unit-demo';
import { ColourSchemeDemo } from './colour-scheme/colour-scheme-demo';
import { TypographyDemo } from './typography/typography-demo';
import { A11y } from './a11y/a11y';

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
import { SelectDemo } from './select/select-demo';
import { SwitcherDemo } from './switcher/switcher-demo';
import { ToastDemo } from './toast/toast-demo';
import { TooltipDemo } from './tooltip/tooltip-demo';

const toastConfig: PureToastConfig = {
  cssTransitionDuration: 300,
  duration: 3000,
  horizontalPosition: 'right',
  verticalPosition: 'top'
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    StyleguideRoutingModule,
    PureElements,
    MitsDefaultTheme,
    BrandLogoModule
  ],
  declarations: [
    Styleguide,

    Intro,
    
    BaseUnitDemo,
    ColourSchemeDemo,
    TypographyDemo,
    A11y,

    ControlsDemo,
    GridDemo,
    
    BadgeDemo,
    ButtonDemo,
    CardDemo,
    DataGridDemo,
    DropdownDemo,
    IconDemo,
    FormControlDemo,
    LoadingDemo,
    MenuDemo,
    ModalDemo,
    RoundBadgeDemo,
    SelectDemo,
    SwitcherDemo,
    ToastDemo,
    TooltipDemo
  ],
  providers: [
    {
      provide: PureToastDefaultOptions, 
      useValue: toastConfig
    }
  ],
})
export class StyleguideModule {}
