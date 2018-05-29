import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

import { ModalPage1 } from './modal-pages/modal-page1';
import { ModalPage2 } from './modal-pages/modal-page2';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  public modais = [
    {titulo: 'Modal 01', pagina: ModalPage1},
    {titulo: 'Modal 02', pagina: ModalPage2}
  ]

  public itens = ['Item 01', 'Item 02', 'Item 03'];
  public itemSelecionado: string;

  constructor(private modalCtrl: ModalController) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }

  openModal(page: any) {
    this.modalCtrl.create(page, {param: this.itemSelecionado}).present();
  }

}
