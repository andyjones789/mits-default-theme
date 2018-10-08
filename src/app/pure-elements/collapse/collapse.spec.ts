import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { PureCollapse } from './collapse';
import { ComponentNamerModule, StringFormatter } from '../core';

describe('PureCollapse', () => {
  let component: PureCollapse;
  let fixture: ComponentFixture<PureCollapse>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentNamerModule.forRoot()],
      declarations: [ PureCollapse ],
      providers: [ StringFormatter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureCollapse);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
