import { SimpleChanges, SimpleChange } from '@angular/core';

import { ElementClasses } from '../';
import { Constructor } from './';

/** Element states (disabled, focused, etc). */
export type States = {
  /** 
   * Example: 
   * `disabled: {
   *   class: 'c-pure-button--disabled',
   *   isActive: this.disabled
   * }`
   */
  [stateName: string]: {
    class: string,
    isActive?: any,
    isChildState?: boolean
  }
}

export type BaseElementStates = {
  [stateName: string]: boolean;
}

export interface CanRepresentState {
  elementClasses: ElementClasses;
  states: States;

  setStateClasses: (changes?: SimpleChanges) => void;

  updateState?: (stateToUpdate: string, flag: boolean) => void;
}

/** Mixin to dynamically control element state classes. */
export function mixinStateClasses<T extends Constructor<{}>>(base: T): Constructor<CanRepresentState> & T {
  return class extends base {
    elementClasses: ElementClasses;
    states: States = {};

    /**
     * Enable state class in `elementClasses` object depending on if such state
     * is active.
     *
     * Call this function whenever you have state change and want to apply
     * corresponding state class.
     */
    setStateClasses(changes?: SimpleChanges): void {
      let elementChangesFound = false,
          change: SimpleChange;

      // Update state only in case there is element changes (ignore child
      // ones).

      if (changes) {
        for (let change in changes) {
          if (this.states.hasOwnProperty(change)) {
            if (!this.states[change].isChildState) {
              this.states[change].isActive = !!changes[change].currentValue; // TODO coerceBoolean?
              elementChangesFound = true;
            }
          }
        }
      }

      if (changes && elementChangesFound || !changes) {
        for (let stateName in this.states) {
          let stateClass = this.states[stateName].class;
          this.elementClasses[stateClass] = this.states[stateName].isActive;
        }
      }
    }

    /*
     * Update given state in `states` object. Example usage in setter function:
     * `updateState('disabled', true)`.
     */
    updateState(stateToUpdate: string, flag: boolean): void {
      this.states[stateToUpdate].isActive = flag;
    }

    constructor(...args: any[]) { 
      super(...args); 
    }
  };
}