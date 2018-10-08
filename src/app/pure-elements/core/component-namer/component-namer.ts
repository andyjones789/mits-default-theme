import { Injectable, Inject } from '@angular/core';

import { StringFormatter } from '../string-formatter';
import { ComponentNamerConfig } from './component-namer-config';
import { ComponentNamerConfigToken } from './component-namer-config-token';

@Injectable({
  providedIn: 'root'
})
export class ComponentNamer {

  /**
   * Generate class name for component.
   *
   * @param blockName       Name of component block — e.g: 'Textfield',
   *                        'Modal Window'.
   * @param elementName     Name of element of component block — e.g:
   *                        'Input', 'Content' (optional).
   * @param modificatorName Name of component modification — e.g:
   *                        'Dark', 'Small' (optional).
   *
   * Working example:
   *
   * 1) Case config.namingConvention === 'kebab':
   *    generateClassName('Modal Window') => 'c-pure-modal-window'
   *    generateClassName('Modal Window', 'Content', 'Extra Wide') => 'c-pure-modal-window__content--extra-wide'
   *
   * 2) Case config.namingConvention === 'camel':
   *    generateClassName('Modal Window', '', 'Extra Wide') => 'c-pure-modalWindow--extraWide'
   *    generateClassName('modal-window', 'content', 'extra-wide') => 'c-pure-modalWindow__content--extraWide'
   */
  generateClassName(blockName: string, elementName?: string, modificatorName?: string): string {
    blockName = this.formatNamePart(blockName);
    elementName = elementName ? this.formatNamePart(elementName) : '';
    modificatorName = modificatorName ? this.formatNamePart(modificatorName) : '';
    return (this.config.classPrefix ? this.config.classPrefix + this.config.classPrefixDelimiter : '') +
           (this.config.blockNamePrefix ? this.config.blockNamePrefix + this.config.blockNamePrefixDelimiter : '') + 
           (blockName) +
           (elementName ? this.config.elementDelimiter + elementName : '') +
           (modificatorName ? this.config.modificatorDelimiter + modificatorName : '');
  }

  /**
   * Generate ID name for component.
   *
   * @param count           Count of component — e.g. 1, 2, 3. Made to
   *                        avoid IDs duplications.
   * @param blockName       Name of component block — e.g: 'Textfield',
   *                        'Modal Window' (optional).
   * @param elementName     Name of element of component block — e.g:
   *                        'Input', 'Content' (optional).
   */
  generateId(count: number, blockName?: string, elementName?: string): string {
    blockName = blockName ? this.formatNamePart(blockName) : '';
    elementName = elementName ? this.formatNamePart(elementName) : '';
    return (blockName ? (blockName + this.config.idDelimiter) : '') + 
           (elementName ? (elementName + this.config.idDelimiter) : '') + 
           (String(count));
  }

  private formatNamePart(namePart: string): string {
    let namePartConverted: string;
    switch (this.config.namingConvention) {
      case 'kebab':
        namePartConverted = this.stringFormatter.toKebabCase(namePart);
        break;
      case 'camel':
        namePartConverted = this.stringFormatter.toCamelCase(namePart);
        break;
      default:
        namePartConverted = namePart;
        break;
    }
    return namePartConverted;
  }

  constructor(@Inject(ComponentNamerConfigToken) private config: ComponentNamerConfig, private stringFormatter: StringFormatter) {
  }
}