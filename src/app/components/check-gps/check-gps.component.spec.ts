import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckGpsComponent } from './check-gps.component';

describe('CheckGpsComponent', () => {
  let component: CheckGpsComponent;
  let fixture: ComponentFixture<CheckGpsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckGpsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckGpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
