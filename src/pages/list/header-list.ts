import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-header-list',
  templateUrl: 'header-list.html',
})
export class HeaderListPage {

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
