import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-simple-list',
  templateUrl: 'simple-list.html',
})
export class SimpleListPage {

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
