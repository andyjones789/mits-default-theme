export interface PureCollapseConfig {
  /** Whether it should collapse by clicking on the full Collapse body */
  collapseOnClick?: boolean;

  /** Whether it should collapse by clicking on Collapse header */
  collapseOnHeaderClick?: boolean;

  /** Whether it should collapse by clicking on Collapse footer */
  collapseOnFooterClick?: boolean;

  /** Whether it should be collapsed by default */
  collapsedOnInit?: boolean;

  openAnimationDuration?: number;
  closeAnimationDuration?: number;
}

export const PureCollapseDefaultConfig: PureCollapseConfig = {
  collapseOnClick: false,
  collapseOnHeaderClick: true,
  collapseOnFooterClick: false,

  collapsedOnInit: true,

  openAnimationDuration: 0,
  closeAnimationDuration: 0
}