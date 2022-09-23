import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToGoogleCalendarComponent } from './add-to-google-calendar.component';

describe('AddToGoogleCalendarComponent', () => {
  let component: AddToGoogleCalendarComponent;
  let fixture: ComponentFixture<AddToGoogleCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddToGoogleCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddToGoogleCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the correct number', () => {
    const result = component.zero_pad2(5);
    expect(result).toEqual('05');
  });

  it('should return the correct number', () => {
    const result = component.zero_pad2(15);
    expect(result).toEqual(15);
  });
  it('should call format date with provided end date and start date', () => {
    const start_date = component.startDate;
    spyOn(component, 'format_date');
    component.addToCalendar();
    expect(component.format_date).toHaveBeenCalledWith(start_date);
  });

  it('should return the formatted date', () => {
    const date = new Date('December 17, 2021 03:24:00');
    const result = component.format_date(date);
    expect(result).toEqual('20211217T032400GMT');
  });
});
