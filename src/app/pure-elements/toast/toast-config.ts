import { ViewContainerRef, InjectionToken } from '@angular/core';

export const PureToastData = new InjectionToken<any>('PureToastData');

export type PureToastHorizontalPosition = 'start' | 'center' | 'end' | 'left' | 'right';
export type PureToastVerticalPosition = 'top' | 'bottom';

export class PureToastConfig<D = any> {
  /** The view container to place the overlay for the toast into. */
  viewContainerRef?: ViewContainerRef;

  /** The length of time in milliseconds to wait before automatically dismissing the toast. */
  duration?: number = 3000;

  /** The length of time in milliseconds to wait before CSS exit transition is done. */
  cssTransitionDuration?: number = 0;

  /** Extra CSS classes to be added to the toast container. */
  containerExtraClass?: string | string[];

  /** Data being injected into the child component. */
  data?: D | null = null;

  horizontalPosition?: PureToastHorizontalPosition = 'center';
  verticalPosition?: PureToastVerticalPosition = 'bottom';
}
