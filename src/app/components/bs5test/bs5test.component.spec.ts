import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bs5testComponent } from './bs5test.component';

describe('Bs5testComponent', () => {
  let component: Bs5testComponent;
  let fixture: ComponentFixture<Bs5testComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bs5testComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bs5testComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
