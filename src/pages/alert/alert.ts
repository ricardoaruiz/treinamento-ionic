import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  constructor(
    public alertCtrl: AlertController,
    public navCtrl: NavController, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }

  public openBasicAlert(): void {
    let alert = this.alertCtrl.create({
      title: 'Alert básico',
      subTitle: 'Subtítulo do alert básico',
      buttons: ['OK']
    });
    alert.present();
  }

  public openConfirmAlert(): void {
    let confirmAlert = this.alertCtrl.create({
      title: 'Alerta de confirmação',
      message: 'Confirme por favor',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirmado');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelado');
          }
        }
      ]
    });
    confirmAlert.present();
  }

  public openInputAlert(): void {
    let inputAlert = this.alertCtrl.create({
      title: 'Login',
      message: 'Enter your login',
      inputs: [
        {
          name: 'login',
          placeholder: 'Login'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        },
        {
          text: 'Ok',
          handler: (data) => {
            console.log('OK', data);
          }
        }
      ]
    });
    inputAlert.present();
  }

  public openRadioAlert(): void {
    let radioAlert = this.alertCtrl.create();

    radioAlert.setTitle('Select a planet');
    radioAlert.addInput({
      type: 'radio',
      label: 'Aldebaraan',
      value: 'value1'
    });
    radioAlert.addInput({
      type: 'radio',
      label: 'Bespin',
      value: 'value2'
    });
    radioAlert.addInput({
      type: 'radio',
      label: 'March',
      value: 'value3'
    });   
    radioAlert.addButton({
      text: 'Cancel',
      role: 'cancel'
    });
    radioAlert.addButton({
      text: 'OK',
      handler: (data) => {
        console.log('Planets', data);
      }      
    })
    radioAlert.present();
  }

  public openCheckboxAlert(): void {
    let checkAlert = this.alertCtrl.create({
      title : 'Wich planets have you visited?',
      inputs: [
        {
          type: 'checkbox',
          label: 'Aldebaraan',
          value: 'value1',
          checked: true
        },
        {
          type: 'checkbox',
          label: 'Bespin',
          value: 'value2'
        },
        {
          type: 'checkbox',
          label: 'March',
          value: 'value3'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: (data) => {
            console.log('Planets', data);
          }
        }
      ]
    });
    checkAlert.present();
  }
}
