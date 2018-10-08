import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { PureAsterisk } from './asterisk';
import { ComponentNamerModule, StringFormatter } from '../core';

describe('PureAsterisk', () => {
  let component: PureAsterisk;
  let fixture: ComponentFixture<PureAsterisk>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentNamerModule.forRoot()],
      declarations: [ PureAsterisk ],
      providers: [ StringFormatter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureAsterisk);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
