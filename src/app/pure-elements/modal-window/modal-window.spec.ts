import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { PureModalWindow } from './modal-window';
import { ComponentNamerModule, StringFormatter } from '../core';

describe('PureModalWindow', () => {
  let component: PureModalWindow;
  let fixture: ComponentFixture<PureModalWindow>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentNamerModule.forRoot()],
      declarations: [ PureModalWindow ],
      providers: [ StringFormatter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureModalWindow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
