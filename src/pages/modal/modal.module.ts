import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ModalPage } from './modal';
import { ModalPage1 } from './modal-pages/modal-page1';
import { ModalPage2 } from './modal-pages/modal-page2';

@NgModule({
  declarations: [
    ModalPage,
    ModalPage1,
    ModalPage2,
  ],
  entryComponents: [
    ModalPage1,
    ModalPage2
  ],
  imports: [
    IonicPageModule.forChild(ModalPage),
  ],
})
export class ModalPageModule {}
