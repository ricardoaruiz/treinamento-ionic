import { Component, Injectable } from '@angular/core';
import { PopoverController, Popover, IonicPage } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class PopoverManager {

  private popoverSubject = new Subject<string>();

  public observable = this.popoverSubject.asObservable();

  on(evento: string, callback: any): Subscription {
    return this.observable.subscribe( (event) => {
      if (event === evento) {
        callback();
      }
    });
  }

  trigger(evento: string) {
    this.popoverSubject.next(evento)
  }

}

@Component({
  template: `<ion-list radio-group class="popover-page">
  <ion-item class="text-athelas">
    <ion-label>Athelas</ion-label>
    <ion-radio value="Athelas" (click)="itemClick()"></ion-radio>
  </ion-item>
  <ion-item class="text-charter">
    <ion-label>Charter</ion-label>
    <ion-radio value="Charter" (click)="itemClick()"></ion-radio>
  </ion-item>
  <ion-item class="text-iowan">
    <ion-label>Iowan</ion-label>
    <ion-radio value="Iowan" (click)="itemClick()"></ion-radio>
  </ion-item>
  <ion-item class="text-palatino">
    <ion-label>Palatino</ion-label>
    <ion-radio value="Palatino" (click)="itemClick()"></ion-radio>
  </ion-item>
  <ion-item class="text-san-francisco">
    <ion-label>San Francisco</ion-label>
    <ion-radio value="San Francisco" (click)="itemClick()"></ion-radio>
  </ion-item>
  <ion-item class="text-seravek">
    <ion-label>Seravek</ion-label>
    <ion-radio value="Seravek" (click)="itemClick()"></ion-radio>
  </ion-item>
  <ion-item class="text-times-new-roman">
    <ion-label>Times New Roman</ion-label>
    <ion-radio value="Times New Roman" (click)="itemClick()"></ion-radio>
  </ion-item>
</ion-list>`
})
export class PopoverContent {

  constructor(private popoverManager: PopoverManager) {

  }

  itemClick() {
    this.popoverManager.trigger('fechar');
  }

}

@IonicPage()
@Component({
  selector: 'page-toolbar',
  templateUrl: 'toolbar.html',
})
export class ToolbarPage {

  private popover : Popover;
  //private popverSubscription: Subscription;

  constructor(public popoverCtrl: PopoverController,
              public popoverManager: PopoverManager) {
    this.popover = this.popoverCtrl.create(PopoverContent);
  }

  ionViewDidLoad() {
    //this.popverSubscription = 
    this.popoverManager.on('fechar', () => {
      console.log('fechar');
      this.popover.dismiss();
    });
    
    // this.popover.onDidDismiss( () => {
    //   this.popverSubscription.unsubscribe();      
    // })
  }

  openPopover(event) {
    this.popover.present({ev: event});
  }

}
