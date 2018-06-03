import { Component } from '@angular/core';
import { IonicPage, PopoverController, ToastController } from 'ionic-angular';
import { PopoverContentPage } from './popover-content/popover-content';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(private popoverCtrl: PopoverController,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  abrirPopover(ev: any) {
    let popover = this.popoverCtrl.create(PopoverContentPage);

    popover.onDidDismiss( (data) => {
      this.toastCtrl.create({
        message: data ? data.value : '',
        duration: 2000,
        position: 'bottom'
      }).present();
    })

    popover.present({ev: ev});
  }

}
