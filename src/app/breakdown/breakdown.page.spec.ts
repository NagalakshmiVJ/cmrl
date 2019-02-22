import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakdownPage } from './breakdown.page';

describe('BreakdownPage', () => {
  let component: BreakdownPage;
  let fixture: ComponentFixture<BreakdownPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakdownPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakdownPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
