import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-checkbox',
  templateUrl: 'checkbox.html',
})
export class CheckboxPage {

  public isJonSnow: boolean = false;
  public isChecked: boolean = false;
  public isEnabled: boolean = false;

  constructor() {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckboxPage');
  }

}
