export interface ComponentNamerConfig {
  classPrefix?: string;                 // Prefix for component class, e.g. 'c-btn',
                                        // 'ui-btn', 'block-btn', etc.
  classPrefixDelimiter?: string;        // Delimiter for class prefix.
  blockNamePrefix?: string;             // Prefix for component name (block in BEM
                                        // structure): 'pure-btn', 'my-cool-btn', etc.
  blockNamePrefixDelimiter?: string;    // Delimiter for block prefix.
  elementDelimiter?: string;            // Delimiter for component inner elements
                                        // (element in BEM structure): 'textfield__icon',
                                        // 'textfield__input', etc.
  modificatorDelimiter?: string;        // Delimiter for component modifier:
                                        // 'modal--dark', 'modal--sm', etc.
  namingConvention?: 'kebab' | 'camel'; // kebab-case or camelCase.
  idDelimiter?: string;                 // Delimiter for ID name.
}

/**
 * Use BEM class names by default. See more about BEM at http://getbem.com.
 *
 * Class name example using options below: 
 *   '.c-pure-modal-window__content--sm'.
 */
export const ComponentNamerDefaultConfig: ComponentNamerConfig = {
  classPrefix:              'c',
  classPrefixDelimiter:     '-',
  blockNamePrefix:          'pure',
  blockNamePrefixDelimiter: '-',
  elementDelimiter:         '__',
  modificatorDelimiter:     '--',
  namingConvention:         'kebab',
  idDelimiter:              '-'
}