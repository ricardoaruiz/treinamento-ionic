import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-divider-list',
  templateUrl: 'divider-list.html',
})
export class DividerListPage {

  public letters: string[] = [];
  public items: any[][] = [];

  constructor(public navParams: NavParams) {
  }  

  ionViewDidLoad() {
    let currentFirstLetter: string = undefined;
    let oldFirstLetter: string = undefined;

    let i: number = undefined;
    let j: number = 0;

    this.navParams.data.forEach(element => {
      currentFirstLetter = element.toString().substr(0,1);

      if(currentFirstLetter !== oldFirstLetter) {
        if (i === undefined) {
          i = 0;
        } else {
          i++;
        }
        j = 0;
        this.letters[i]=currentFirstLetter;
        this.items[i] = [];
      }

      this.items[i][j]=element;
      j++;
      oldFirstLetter = currentFirstLetter;

    });
  }

  itemSelected(item: string) {
    console.log("Selected Item", item);
  }

}
