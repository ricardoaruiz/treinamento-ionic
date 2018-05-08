import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-thumbnail-list',
  templateUrl: 'thumbnail-list.html',
})
export class ThumbnailListPage {

  public items: string[];

  constructor(public navParams: NavParams) {
  }  

  ionViewDidLoad() {
    this.items = this.navParams.data;
  }

}
