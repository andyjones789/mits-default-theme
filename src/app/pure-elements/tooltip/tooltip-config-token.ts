import { InjectionToken } from '@angular/core';

import { PureTooltipConfig, PureTooltipDefaultConfig } from './tooltip-config';

export const PureTooltipConfigToken = new InjectionToken<PureTooltipConfig>('PureTooltipConfig', {
  providedIn: 'root',
  factory: PureTooltipConfigFactory
});

export function PureTooltipConfigFactory(): PureTooltipConfig {
  return PureTooltipDefaultConfig;
}