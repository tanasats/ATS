import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckQrComponent } from './check-qr.component';

describe('CheckQrComponent', () => {
  let component: CheckQrComponent;
  let fixture: ComponentFixture<CheckQrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckQrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckQrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
