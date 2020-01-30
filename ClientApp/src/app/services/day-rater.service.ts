import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DayRater } from 'src/app/classes/day-rater';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DayRaterService {

  _baseURL: string = "api/DayRating"

  constructor(private http: HttpClient) { }

  addDayRater(dayRater: DayRater) : Observable<DayRater> {
    return this.http.post<DayRater>(this._baseURL+"/AddDayRater/", dayRater);
  }

  getDayRaterById(id: number) : Observable<DayRater>{
    return this.http.get<DayRater>(this._baseURL+"/SingleDayRater/"+id);
  }

  updateDayRater(dayRater: DayRater) : Observable<DayRater>{
    return this.http.put<DayRater>(this._baseURL+"/UpdateDayRater/"+dayRater.id, dayRater);
  }

  deleteDayRater(id: number) : Observable<null>{
    return this.http.delete<null>(this._baseURL+"/DeleteDayRater/"+id);
  }
}
