import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(
    public actionSheetCtrl : ActionSheetController,
    public navCtrl: NavController, 
    public navParams: NavParams
    ) {
  }

  ionViewDidLoad() {
    
  }

  public abritActionSheet(): void {
    let actionSheet = this.actionSheetCtrl.create(
      {
        title : "Opções",
        buttons : [
          {
            icon : 'clock',
            text : 'Horários', 
            role : 'destructive',
            handler : () => {
              alert('Você clicou na opção Horários');
            }
          },
          {
            icon : 'contact',
            text : 'Contatos',
            handler : () => {
              alert('Você clicou na opção Contatos');
            }
          },
          {
            icon : 'exit',
            text : 'Cancelar', 
            role : 'cancel',
            handler : () => {
              alert('Você clicou na Cancelar');
            }
          }
        ]
      }
    );
    actionSheet.present();
  }

}
