import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { ComponentNamerModule, ComponentNamer } from './index';
import { StringFormatter } from '../string-formatter';

describe('Component Namer', () => {
  let componentNamer: ComponentNamer,
      stringFormatter: StringFormatter = new StringFormatter();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ ComponentNamerModule.forRoot() ],
      providers: [ StringFormatter ]
    });
    componentNamer = TestBed.get(ComponentNamer);
  });

  it('#generateClassName should return string', () => {
    expect(typeof componentNamer.generateClassName('Button')).toBe('string');
    expect(typeof componentNamer.generateClassName('')).toBe('string');
  });

  it('#generateClassName should generate class name', () => {
    expect(componentNamer.generateClassName('Button')).toBe('c-pure-button');
  });

  it('#generateClassName should generate class name with element', () => {
    expect(componentNamer.generateClassName('Button', 'Icon')).toBe('c-pure-button__icon');
  });

  it('#generateClassName should generate class name with modifier', () => {
    expect(componentNamer.generateClassName('Button', '', 'Accent')).toBe('c-pure-button--accent');
  });

  it('#generateClassName should return camel case string from default case', () => {
    // expect(componentNamer.generateClassName('Modal Window', 'Content', 'Small Dark')).toBe('c-pure-modalWindow__content--smallDark');
  });

  it('#generateClassName should return camel case string from kebab case', () => {
    // expect(componentNamer.generateClassName('modal-window', 'content', 'sm-dark')).toBe('c-pure-modalWindow__content--smDark');
  });

  it('#generateClassName should return camel case string from mixed case', () => {
    // expect(componentNamer.generateClassName('modal Window', 'content', 'sm-dark')).toBe('c-pure-modalWindow__content--smDark');
  });

  it('#generateClassName should return kebab case string from default case');

  it('#generateClassName should return kebab case string from kebab case');
});
