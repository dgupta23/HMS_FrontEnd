import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideBookingInfoComponent } from './provide-booking-info.component';

describe('ProvideBookingInfoComponent', () => {
  let component: ProvideBookingInfoComponent;
  let fixture: ComponentFixture<ProvideBookingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideBookingInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideBookingInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
