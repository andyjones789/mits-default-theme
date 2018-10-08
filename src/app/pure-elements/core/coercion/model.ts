/** Coerces a form model value to a string. */
export function coerceModelValue(value: any): string {
  switch (typeof value) {
    case 'string':
      break;
    case 'number':
      if (Number.isNaN(value)) {
        value = ''
      } else {
        value = '' + value;
      }
      break;
    case 'boolean':
      value = String(value);
      break;
    default:
      value = '';
  }
  return value;
}