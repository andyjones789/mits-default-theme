import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {} from 'jasmine';

import { PureSwitcher } from './switcher';
import { ComponentNamerModule, StringFormatter } from '../core';

describe('PureSwitcher', () => {
  let component: PureSwitcher;
  let fixture: ComponentFixture<PureSwitcher>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ComponentNamerModule.forRoot()],
      declarations: [ PureSwitcher ],
      providers: [ StringFormatter ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSwitcher);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
