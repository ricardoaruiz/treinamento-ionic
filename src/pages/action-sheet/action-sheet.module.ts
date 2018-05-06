import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetPage } from './action-sheet';

@NgModule({
  declarations: [
    ActionSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionSheetPage),
  ],
  entryComponents: [
    ActionSheetPage
  ]
})
export class ActionSheetPageModule {}
