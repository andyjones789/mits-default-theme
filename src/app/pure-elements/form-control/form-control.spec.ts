import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import {} from 'jasmine';

import { PureFormControl } from './form-control';
import { PureLabel } from '../label';
import { PureMessage } from '../message';
import { ComponentNamerModule, StringFormatter } from '../core';

describe('PureFormControl', () => {
  let component: PureFormControl;
  let fixture: ComponentFixture<PureFormControl>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ComponentNamerModule.forRoot()],
      declarations: [ PureFormControl, PureLabel, PureMessage ],
      providers: [ StringFormatter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureFormControl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
