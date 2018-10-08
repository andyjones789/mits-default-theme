import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { StringFormatter } from './string-formatter';

describe('String Formatter', () => {
  let stringFormatter: StringFormatter;

  beforeEach(() => { stringFormatter = new StringFormatter(); });

  it('#toCamelCase should return string', () => {
    expect(typeof stringFormatter.toCamelCase('Button')).toBe('string');
    expect(typeof stringFormatter.toCamelCase('')).toBe('string');
  });

  it('#toCamelCase should return camel case string from default case', () => {
    expect(stringFormatter.toCamelCase('Modal Window')).toBe('modalWindow');
    expect(stringFormatter.toCamelCase('Modal')).toBe('modal');
  });

  it('#toCamelCase should return camel case string from kebab case', () => {
    expect(stringFormatter.toCamelCase('modal-window')).toBe('modalWindow');
  });

  it('#toCamelCase should return camel case string from camel case', () => {
    expect(stringFormatter.toCamelCase('modalWindow')).toBe('modalWindow');
  });

  it('#toCamelCase should return camel case string from mixed case', () => {
    expect(stringFormatter.toCamelCase('modal Window-content')).toBe('modalWindowContent');
  });


  it('#toKebabCase should return string', () => {
    expect(typeof stringFormatter.toKebabCase('Button')).toBe('string');
    expect(typeof stringFormatter.toKebabCase('')).toBe('string');
  });

  it('#toKebabCase should return kebab case string from default case', () => {
    expect(stringFormatter.toKebabCase('Modal Window')).toBe('modal-window');
    expect(stringFormatter.toKebabCase('Modal')).toBe('modal');
    expect(stringFormatter.toKebabCase('modal')).toBe('modal');
  });

  it('#toKebabCase should return kebab case string from camel case', () => {
    expect(stringFormatter.toKebabCase('modalWindow')).toBe('modalwindow');
  });

  it('#toKebabCase should return kebab case string from kebab case', () => {
    expect(stringFormatter.toKebabCase('modal-window')).toBe('modal-window');
  });

  it('#toKebabCase should return kebab case string from mixed case', () => {
    expect(stringFormatter.toKebabCase('modal Window-content')).toBe('modal-window-content');
  });
});
