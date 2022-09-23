import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-add-to-google-calendar',
  templateUrl: './add-to-google-calendar.component.html',
  styleUrls: ['./add-to-google-calendar.component.css']
})
export class AddToGoogleCalendarComponent implements OnInit {

  @Input() startDate: Date;
  @Input() endDate: Date;
  @Input() title: string;
  @Input() details: string;


  public start_date : Date;
  public end_date : Date;
  public final_date = "";
  public event_name = "";
  public href = "";
  public description = "";


  constructor() { }

  ngOnInit(): void {
  }

  addToCalendar() {
    this.start_date = this.startDate;
    this.end_date = this.endDate;
    this.event_name = this.title;
    this.description = this.details;
    this.final_date = this.format_date(this.start_date) + '/' + this.format_date(this.end_date);


    this.href = 'https://www.google.com/calendar/render?action=TEMPLATE&text=' + this.event_name + '&dates=' + this.final_date +"&details="+ this.description+ '&sf=true&output=xml';
    window.open(
      this.href, '_blank'
    );
  }

  format_date(date:Date) {
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    var hour = date.getHours();
    var minutes = date.getMinutes();

    let formatted_date;
    if (hour === 0 && minutes === 0) {
      formatted_date = ('' + year) + this.zero_pad2(monthIndex + 1) + this.zero_pad2(day);
    } else {
      formatted_date = ('' + year) + this.zero_pad2(monthIndex + 1) + this.zero_pad2(day) + 'T' + this.zero_pad2(hour) + this.zero_pad2(minutes) + '00GMT';
    }
    return formatted_date;
  }

  zero_pad2(num:number) {
    if (num < 10) return '0' + num;
    return num;
  }

}
