import { NgModule, ModuleWithProviders, InjectionToken } from '@angular/core';

import { ComponentNamer } from './component-namer';
import { ComponentNamerConfigToken } from './component-namer-config-token';
import { ComponentNamerConfig, ComponentNamerDefaultConfig } from './component-namer-config';
import { StringFormatter } from '../string-formatter';

@NgModule()
export class ComponentNamerModule {

  static forRoot(componentNamerConfig: ComponentNamerConfig = {}): ModuleWithProviders {
    const finalConfig: ComponentNamerConfig = Object.assign(ComponentNamerDefaultConfig, componentNamerConfig);

    return {
      ngModule: ComponentNamerModule,
      providers: [
        StringFormatter,
        ComponentNamer,
        {
          provide: ComponentNamerConfigToken,
          useValue: finalConfig
        }
      ]
    }
  }
}