import { ViewController, NavParams, ToastController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'modal-page2',
    templateUrl: 'modal-page2.html',
})
export class ModalPage2 {

    constructor(private viewCtrl: ViewController, 
                private params: NavParams, 
                private toastCtrl: ToastController) {

        this.toastCtrl.create({
            message: `O parâmetro recebido foi ${this.params.data.param}`,
            duration: 2000,
            position: 'bottom'
        }).present();
    }

    fechar() {
        this.viewCtrl.dismiss();
    }

}