import { Component } from '@angular/core';
import { IonicPage, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html',
})
export class LoadingPage {

  constructor(
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');
  }

  mostrarLoading() {
    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });
    loading.present().then( () => {
      setTimeout(() => {
        console.log('Carregou!')
        loading.dismiss();
      }, 3000);
    });
    loading.onDidDismiss( () => {
      console.log('O loaging fechou');
    });
  }

  mostrarLoadingIOS() {
    let loading = this.loadingCtrl.create({
      spinner: 'ios',
      content: 'Carregando...'
    });
    loading.present().then( () => {
      setTimeout(() => {
        console.log('Carregou!')
        loading.dismiss();
      }, 3000);
    });
    loading.onDidDismiss( () => {
      console.log('O loaging fechou');
    });
  }

  mostrarLoadingDots() {
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: 'Carregando...'
    });
    loading.present().then( () => {
      setTimeout(() => {
        console.log('Carregou!')
        loading.dismiss();
      }, 3000);
    });
    loading.onDidDismiss( () => {
      console.log('O loaging fechou');
    });
  }

  mostrarLoadingCircles() {
    let loading = this.loadingCtrl.create({
      spinner: 'circles',
      content: 'Carregando...'
    });
    loading.present().then( () => {
      setTimeout(() => {
        console.log('Carregou!')
        loading.dismiss();
      }, 3000);
    });
    loading.onDidDismiss( () => {
      console.log('O loaging fechou');
    });
  }  

  mostrarLoadingCustomizado() {
    let loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: `
        <div class="custom-spinner-container">
          <img src='assets/imgs/custom-spinner.svg'>
          <span class="title">Carregando...</span>
        </div>`
    });
    loading.present().then( () => {
      setTimeout(() => {
        console.log('Carregou!')
        loading.dismiss();
      }, 3000);
    });
    loading.onDidDismiss( () => {
      console.log('O loaging fechou');
    });
  }

}
