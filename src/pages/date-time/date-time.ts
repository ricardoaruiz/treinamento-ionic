import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html',
})
export class DateTimePage {

  public event: any = {
    startDate: undefined,
    startTime: '00:00',
    endDate: '2078-12-22',
    endTime: '23:59',
    birthday: '1979-12-31'
  };

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateTimePage');
  }

  public updateStartDate(date : string): void {
    this.event.startDate = date;
  }

  public updateStartTime(time : string): void {
    this.event.startTime = time;
  }

  public updateEndDate(date : string): void {
    this.event.endDate = date
  }

  public updateEndTime(time : string) : void {
    this.event.endTime = time;
  }

  public updateBithday(date : string): void {
    this.event.birthday = date;
  }

}
