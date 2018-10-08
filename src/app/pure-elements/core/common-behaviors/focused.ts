import { Constructor } from './';

export interface CanFocus {
  /** Whether the component is focused. */
  focused: boolean;
}

/** Mixin to augment a component with a `disabled` property. */
export function mixinFocused<T extends Constructor<{}>>(base: T): Constructor<CanFocus> & T {
  return class extends base {
    protected getActiveElement: () => any;
    
    get focused(): boolean {
      let isFocused: boolean;
      if (document.activeElement === this.getActiveElement()) {
        isFocused = true;
      } else {
        isFocused = false;
      }
      return isFocused;
    }

    set focused(value: boolean) {
      if (value) {
        this.getActiveElement().focus();
      } else {
        this.getActiveElement().blur();
      }
    }

    constructor(...args: any[]) { 
      super(...args); 
    }
  };
}