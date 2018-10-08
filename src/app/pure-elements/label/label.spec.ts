import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { PureLabel } from './label';
import { ComponentNamerModule, StringFormatter } from '../core';

describe('PureLabel', () => {
  let component: PureLabel;
  let fixture: ComponentFixture<PureLabel>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentNamerModule.forRoot()],
      declarations: [ PureLabel ],
      providers: [ StringFormatter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureLabel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
