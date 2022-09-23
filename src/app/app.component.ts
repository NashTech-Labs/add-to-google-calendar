import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hands-on Angular Modules';
  startDate = new Date('9/30/2022 10:00 am');
  endDate = new Date('9/30/2022 11:00 am');
  details = "The session will solely focus on How angular Modules work !"
}
