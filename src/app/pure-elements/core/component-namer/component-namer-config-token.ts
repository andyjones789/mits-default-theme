import { Injectable, InjectionToken } from '@angular/core';

import { ComponentNamerConfig } from './component-namer-config';

export const ComponentNamerConfigToken = new InjectionToken<ComponentNamerConfig>("ComponentNamerConfig");