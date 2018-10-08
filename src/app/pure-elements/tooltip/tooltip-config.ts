export type TooltipPosition = 'left' | 'right' | 'top' | 'bottom';

export type TooltipTriggerEvent = 'hover' | 'focus';
// Hover changes to `longpress` on mobile devices.

export interface PureTooltipConfig {
  showDelay?: number;
  hideDelay?: number;
  touchendHideDelay?: number;
  position?: TooltipPosition;
  triggerEvent?: TooltipTriggerEvent;
  closeOnEsc?: boolean;
}

export const PureTooltipDefaultConfig: PureTooltipConfig =  {
  showDelay: 0,
  hideDelay: 0,
  touchendHideDelay: 1500,
  position: 'top',
  triggerEvent: 'hover',
  closeOnEsc: true
}

export interface PureTooltipComponentConfig {
  host?: HTMLElement,
  position?: TooltipPosition
}