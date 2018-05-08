import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-inset-list',
  templateUrl: 'inset-list.html',
})
export class InsetListPage {

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
