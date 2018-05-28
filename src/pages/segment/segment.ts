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
    const isAndroid = this.platform.is('android');
    if (isAndroid) {
      console.log('Android');
    } else {
      console.log('Outros');      
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SegmentPage');
  }

}
