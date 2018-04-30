import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { parseDate } from 'ionic-angular/util/datetime-util';

@IonicPage()
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html',
})
export class DateTimePage {

  public event: any = {
    startDate: '1978-06-22',
    startTime: '00:00',
    endDate: '2078-12-22',
    endTime: '23:59'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateTimePage');
  }

}
