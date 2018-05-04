import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NavigationDetailPage } from './../navigation-detail/navigation-detail';

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {

  public pages = [
    {
      icon: 'alarm',
      title: 'Alarm - Push com parâmetros',
      type: 'push',
      params: {
        title: 'Alarm',
        description: 'Alarm description'
      }
    },
    {
      icon: 'american-football',
      title: 'Sports - Push com parâmetros',
      type: 'push',
      params: {
        title: 'Sports',
        description: 'Sports description'
      }
    },
    {
      icon: 'alarm',
      title: 'Alarm - Root com parâmetros',
      type: 'root',
      params: {
        title: 'Alarm',
        description: 'Alarm description'
      }
    },
    {
      icon: 'american-football',
      title: 'Sports - Root com parâmetros',
      type: 'root',
      params: {
        title: 'Sports',
        description: 'Sports description'
      }
    }        
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationPage');
  }

  public navigate(page: any) {
    if (page.type == 'push') {
      this.navCtrl.push(NavigationDetailPage, { params: page.params});
    } else {
      this.navCtrl.setRoot(NavigationDetailPage, { params: page.params});
    }
  }

}
