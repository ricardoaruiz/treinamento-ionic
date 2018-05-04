import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-navigation-detail',
  templateUrl: 'navigation-detail.html',
})
export class NavigationDetailPage {

  public params: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.params = this.navParams.get('params');
  }

  ionViewDidLoad() {
  }

}
