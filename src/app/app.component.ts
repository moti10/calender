import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  year = new Date().getFullYear();
  month = [
    'January',
   'February',
    'March',
     'April ',
      'May',
      'June',
     'July',
     'August',
     'September',
     'October',
    'November',
    'December'];

    getDefaultOffDays(year) {
      console.log();

    }
}
