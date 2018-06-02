import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  @ViewChild('mySlides')
  private mySlides: Slides

  constructor() {
  }

  ionViewDidLoad() {
    setInterval(() => {
      this.mySlides.slideNext(1500);
      if (this.mySlides.isEnd()) {
        setTimeout(() => {
          this.mySlides.slideTo(0, 1500);
        }, 2000);
      }
    }, 2000);
  }

}
