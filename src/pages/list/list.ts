import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SimpleListPage } from './simple-list';
import { NoLineListPage } from './no-line-list';
import { InsetListPage } from './inset-list';
import { DividerListPage } from './divider-list';
import { HeaderListPage } from './header-list';
import { IconListPage } from './icon-list';
import { AvatarListPage } from './avatar-list';
import { ThumbnailListPage } from './thumbnail-list';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  pages = [
    {
      class: SimpleListPage,
      title: 'Simple List'
    },
    {
      class: NoLineListPage,
      title: 'No Line List'
    },
    {
      class: InsetListPage,
      title: 'Inset List'
    },
    {
      class: DividerListPage,
      title: 'Divider List'
    },
    {
      class: HeaderListPage,
      title: 'Header List'
    },
    {
      class: IconListPage,
      title: 'Icon List'
    },
    {
      class: AvatarListPage,
      title: 'Avatar List'
    },
    {
      class: ThumbnailListPage,
      title: 'Thumbnail List'
    }
  ];

  items = [
      'Doom',
      'Donkey Kong III',
      'Fallout',
      'Final Fantasy VII',
      'GTA',
      'GoldenEye 007',
      'Half Life',
      'Halo',
      'Mega Man X',
      'Pokémon Yellow',
      'Pac-Man',
      'Super Metroid',
      'Super Mario World',
      'Street Fighter II',
      'Star Fox',
      'The Legend of Zelda',
      'Tetris',
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  goTo(page: any) {
    this.navCtrl.push(page.class, this.items);
  }

}
