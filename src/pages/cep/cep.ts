import { Component } from '@angular/core';
import { LoadingController, ToastController } from 'ionic-angular';

import { CepProvider } from './../../providers/cep/cep-provider';

@Component({
  selector: 'page-cep',
  templateUrl: 'cep.html',
})
export class CepPage {

  public cep: string;
  public endereco: any = undefined;
  public erroConsulta: boolean = false;

  constructor(private cepProvider: CepProvider,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CepPage');
  }

  consultarEndereco() {

    if (!this.isCepInformado()) {
      return;
    }

    let loading = this.loadingCtrl.create({
      content: 'Carregando...'
    });

    loading.present();

    this.cepProvider.consultarEnderecoPeloCep(this.cep)
      .subscribe(
        data => {
          console.log('Sucesso', data);
          this.endereco = data;
          this.erroConsulta = false;
          loading.dismiss();
        },
        error => {
          console.log('Erro', error);
          this.erroConsulta = true;
          loading.dismiss();
        }
      )
  }

  limpar() {
    this.cep = '';
    this.endereco = undefined;
    this.erroConsulta = false;
  }

  private isCepInformado(): boolean {

    let cepValido: boolean = true;
    var regexCEP = /^[0-9]{8}$/;

    if (!this.cep || !regexCEP.test(this.cep)) {
      cepValido = false;
    }

    if (!cepValido) {
      this.toastCtrl.create({
        message: 'Informe um CEP válido',
        duration: 2000
      }).present();
    }

    return cepValido;
  }

}
