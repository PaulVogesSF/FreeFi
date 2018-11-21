import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckresultsPage } from './checkresults.page';

describe('CheckresultsPage', () => {
  let component: CheckresultsPage;
  let fixture: ComponentFixture<CheckresultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckresultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckresultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
