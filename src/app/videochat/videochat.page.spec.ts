import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideochatPage } from './videochat.page';

describe('VideochatPage', () => {
  let component: VideochatPage;
  let fixture: ComponentFixture<VideochatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideochatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideochatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
