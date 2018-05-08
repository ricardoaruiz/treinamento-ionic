import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-icon-list',
  templateUrl: 'icon-list.html',
})
export class IconListPage {

  public items: string[];

  constructor(public navParams: NavParams) {
  }  

  ionViewDidLoad() {
    this.items = this.navParams.data;
  }

}
