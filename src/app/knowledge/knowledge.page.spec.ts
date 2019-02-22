import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgePage } from './knowledge.page';

describe('KnowledgePage', () => {
  let component: KnowledgePage;
  let fixture: ComponentFixture<KnowledgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
