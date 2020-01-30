import { Component, OnInit } from '@angular/core';
import { DayRater } from 'src/app/classes/day-rater';
import { DayRaterService } from 'src/app/services/day-rater.service';


@Component({
  selector: 'app-day-rater',
  templateUrl: './day-rater.component.html',
  styleUrls: ['./day-rater.component.css']
})
export class DayRaterComponent implements OnInit {

  dayInfo : DayRater = {
    id: 1,
    date: new Date(),
    dayRating: 0,
    dayDetails: "",
    dayNotes: ""
  };

  constructor(service: DayRaterService) { }

  ngOnInit() {
    
  }

  enterDetail(dayRating){

  }

}
