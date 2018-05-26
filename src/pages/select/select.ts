import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-select',
  templateUrl: 'select.html',
})
export class SelectPage {

  public sexo: string;
  public pizzas: string[];
  public pizzasAlertOpts: { title: string, subTitle: string };
  
  public music: string;
  public musicAlertOpts: { title: string, subTitle: string };

  constructor() {
    this.pizzasAlertOpts = {
      title: 'Pizzas',
      subTitle: 'Selecione suas opções'
    };

    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }
  
  ionViewDidLoad() {

  }

  stpSelect() {
    console.log('STP selected');
  }

}
