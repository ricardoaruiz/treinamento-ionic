import { Component } from '@angular/core';
import { IonicPage, ToastController, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) { }

  ionViewDidLoad() { }

  showToast(message: string, position: string, duration?: number) {
    
    const durationMessage = duration !== undefined && duration !== 0 ? `with ${duration} duration` : '';

    let toastConfig = {
      message: `${message} ${durationMessage}`,
      position: position,
      duration: duration === undefined ? 0 : duration,
      showCloseButton : duration === undefined || duration === 0 ? true : false,
      closeButtonText: 'Fechar'
    };

    const toast = this.toastCtrl.create(toastConfig);
    toast.present();

    toast.onDidDismiss( () => {
      this.alertCtrl.create({
        message: 'Toast fechado',
        buttons: ['OK']
      }).present();
    });

  }
}