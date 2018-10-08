export interface PureModalWindowConfig {
  closeOnEsc?: boolean;
  openAnimationDuration?: number;
  closeAnimationDuration?: number;
};

export const PureModalWindowDefaultConfig: PureModalWindowConfig = {
  closeOnEsc: true,
  openAnimationDuration: 0,
  closeAnimationDuration: 0
}