import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-avatar-list',
  templateUrl: 'avatar-list.html',
})
export class AvatarListPage {

  public items: string[];

  constructor(public navParams: NavParams) {
  }  

  ionViewDidLoad() {
    this.items = this.navParams.data;
  }

}
