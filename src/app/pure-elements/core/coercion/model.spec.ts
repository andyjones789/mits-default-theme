import { coerceModelValue } from './model';

describe('coerceModelValue', () => {

  it('should return string', () => {
    expect(typeof coerceModelValue('some-value')).toBe('string');
    expect(typeof coerceModelValue(5)).toBe('string');
    expect(typeof coerceModelValue(undefined)).toBe('string');
    expect(typeof coerceModelValue(null)).toBe('string');
    expect(typeof coerceModelValue(NaN)).toBe('string');
    expect(typeof coerceModelValue({})).toBe('string');
    expect(typeof coerceModelValue([])).toBe('string');
    expect(typeof coerceModelValue(function(){})).toBe('string');
    expect(typeof coerceModelValue(Symbol())).toBe('string');
    expect(typeof coerceModelValue(Symbol('str'))).toBe('string');
  });

  it('should return passed value if it is string', () => {
    expect(coerceModelValue('some-value')).toBe('some-value');
    expect(coerceModelValue('')).toBe('');
    expect(coerceModelValue(' ')).toBe(' ');
  });

  it('should convert number to string', () => {
    expect(coerceModelValue(50)).toBe('50');
    expect(coerceModelValue(1)).toBe('1');
    expect(coerceModelValue(0)).toBe('0');
    expect(coerceModelValue(-5)).toBe('-5');
  });

  it('should convert boolean to string', () => {
    expect(coerceModelValue(true)).toBe('true');
    expect(coerceModelValue(false)).toBe('false');
  });

  it('should return empty string for any other case', () => {
    expect(coerceModelValue(null)).toBe('');
    expect(coerceModelValue(undefined)).toBe('');
    expect(coerceModelValue({})).toBe('');
    expect(coerceModelValue([])).toBe('');
    expect(coerceModelValue(function(){})).toBe('');
    expect(coerceModelValue(Symbol())).toBe('');
    expect(coerceModelValue(Symbol('str'))).toBe('');
  });
})