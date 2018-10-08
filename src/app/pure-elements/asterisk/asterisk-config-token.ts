import { Injectable, InjectionToken } from '@angular/core';

import { PureAsteriskConfig } from './asterisk-config';

export const PureAsteriskConfigToken = new InjectionToken<PureAsteriskConfig>('PureAsteriskConfig');