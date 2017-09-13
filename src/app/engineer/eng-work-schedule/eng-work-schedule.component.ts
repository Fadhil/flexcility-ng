import { CalendarComponent } from 'ap-angular2-fullcalendar';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-eng-work-schedule',
  templateUrl: './eng-work-schedule.component.html',
  styleUrls: ['./eng-work-schedule.component.scss']
})
export class EngWorkScheduleComponent  {

  calendarOptions: Object = {
    
        fixedWeekCount : true,
        basicDay : true,
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [
          {
            title: 'All Day Event',
            start: '2017-09-01'
          },
          {
            title: 'Long Event',
            start: '2017-09-07',
            end: '2017-09-10'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-09-09T16:00:00'
          },
          {
            id: 999,
            title: 'Repeating Event',
            start: '2017-09-16T16:00:00'
          },
          {
            title: 'Conference',
            start: '2017-09-11',
            end: '2017-09-13'
          },
          {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-09-28'
          },
          {
            title: 'Merdeka',
            start: '2017-08-31'
          }
        ]
      };
    
      @ViewChild(CalendarComponent) myCalendar: CalendarComponent;
    
       changeCalendarView(view) {
         this.myCalendar.fullCalendar('changeView', view);
       }

}
