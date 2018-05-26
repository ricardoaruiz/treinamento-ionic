import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ButtonPage } from '../button/button';
import { CardPage } from '../card/card';
import { ToastPage } from './../toast/toast';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tabSelectedIndex = 2;

  buttonPage: any;
  buttonPageBagdeQtd = 2;

  cardPage: any;
  cardPageBadgeQtd = 1;

  toastPage: any;
  toastPageBadgeQtd = 0;

  constructor() {
    this.buttonPage = ButtonPage;
    this.cardPage = CardPage;
    this.toastPage = ToastPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
