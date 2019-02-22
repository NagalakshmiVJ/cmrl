import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventivePage } from './preventive.page';

describe('PreventivePage', () => {
  let component: PreventivePage;
  let fixture: ComponentFixture<PreventivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventivePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
