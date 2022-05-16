import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseModalWindowComponent } from './base-modal-window.component';

describe('BaseModalWindowComponent', () => {
  let component: BaseModalWindowComponent;
  let fixture: ComponentFixture<BaseModalWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseModalWindowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
