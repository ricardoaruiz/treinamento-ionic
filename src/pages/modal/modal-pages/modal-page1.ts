import { Component } from '@angular/core';
import { ViewController, NavParams, AlertController } from 'ionic-angular';

@Component({
    selector: 'modal-page1',
    templateUrl: 'modal-page1.html',
})
export class ModalPage1 {

    constructor(private viewCtrl: ViewController,
                private navParams: NavParams, 
                private alertCtrl: AlertController) {
        
        this.alertCtrl.create({
            title: 'Parâmetros',
            message: `O parâmetro recebido foi ${this.navParams.data.param}`,
            buttons: ['OK']
        }).present();
    }

    fechar() {
        this.viewCtrl.dismiss();
    }

}