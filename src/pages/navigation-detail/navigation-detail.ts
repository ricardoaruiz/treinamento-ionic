import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-detail',
  templateUrl: 'navigation-detail.html',
})
export class NavigationDetailPage {

  public params: any;

  constructor(public navParams: NavParams) {
    this.params = this.navParams.get('params');
  }

  ionViewDidLoad() {
  }

}
