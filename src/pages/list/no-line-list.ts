import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'no-line-list',
  templateUrl: 'no-line-list.html',
})
export class NoLineListPage {

  public items: string[];

  constructor(public navParams: NavParams) {
  }  

  ionViewDidLoad() {
    this.items = this.navParams.data;
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
