import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullformPage } from './fullform.page';

describe('FullformPage', () => {
  let component: FullformPage;
  let fixture: ComponentFixture<FullformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullformPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
