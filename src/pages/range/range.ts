import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-range',
  templateUrl: 'range.html',
})
export class RangePage {

  public min: number = 0;
  public max: number = 150;
  public step: number = 10;
  public warmth: number = 1500;

  public brightness: number = 10;
  public contrast: number = 5
  public structure: any = { lower : 33, upper : 60};

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RangePage');
  }

}
