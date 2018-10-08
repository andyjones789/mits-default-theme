export type AsteriskPosition = 'label' | 'parent' | 'input' | any;

export interface PureFormControlConfig {
  asteriskPosition?: AsteriskPosition;
}

export const PureFormControlDefaultConfig: PureFormControlConfig = {
  asteriskPosition: 'label'
}