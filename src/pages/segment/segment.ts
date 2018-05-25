import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-segment',
  templateUrl: 'segment.html',
})
export class SegmentPage {

  public pet: string = 'puppies';

  constructor(private platform: Platform) {
    console.log(platform.is('android'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

}
