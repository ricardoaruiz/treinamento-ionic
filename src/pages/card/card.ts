import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
