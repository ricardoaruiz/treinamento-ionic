import { Component, Injectable } from '@angular/core';
import { IonicPage, PopoverController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@IonicPage()
@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html',
})
export class ToolbarPage {

  constructor(public popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolbarPage');
  }

  openPopover(event) {
    console.log('openPopover');
    const popover = this.popoverCtrl.create(PopoverContent);
    popover.present({ev: event});
  }

}

@Component({
  template: `<ion-list radio-group class="popover-page">
  <ion-row>
    <ion-col>
      <button ion-item detail-none class="text-button text-smaller">A</button>
    </ion-col>
    <ion-col>
      <button ion-item detail-none class="text-button text-larger">A</button>
    </ion-col>
  </ion-row>
  <ion-row class="row-dots">
    <ion-col>
      <button ion-button="dot" class="dot-white" [class.selected]="background == 'white'"></button>
    </ion-col>
    <ion-col>
      <button ion-button="dot" class="dot-tan" [class.selected]="background == 'tan'"></button>
    </ion-col>
    <ion-col>
      <button ion-button="dot" class="dot-grey" [class.selected]="background == 'grey'"></button>
    </ion-col>
    <ion-col>
      <button ion-button="dot" class="dot-black" [class.selected]="background == 'black'"></button>
    </ion-col>
  </ion-row>
  <ion-item class="text-athelas">
    <ion-label>Athelas</ion-label>
    <ion-radio value="Athelas"></ion-radio>
  </ion-item>
  <ion-item class="text-charter">
    <ion-label>Charter</ion-label>
    <ion-radio value="Charter"></ion-radio>
  </ion-item>
  <ion-item class="text-iowan">
    <ion-label>Iowan</ion-label>
    <ion-radio value="Iowan"></ion-radio>
  </ion-item>
  <ion-item class="text-palatino">
    <ion-label>Palatino</ion-label>
    <ion-radio value="Palatino"></ion-radio>
  </ion-item>
  <ion-item class="text-san-francisco">
    <ion-label>San Francisco</ion-label>
    <ion-radio value="San Francisco"></ion-radio>
  </ion-item>
  <ion-item class="text-seravek">
    <ion-label>Seravek</ion-label>
    <ion-radio value="Seravek"></ion-radio>
  </ion-item>
  <ion-item class="text-times-new-roman">
    <ion-label>Times New Roman</ion-label>
    <ion-radio value="Times New Roman"></ion-radio>
  </ion-item>
</ion-list>`
})
export class PopoverContent {

}
