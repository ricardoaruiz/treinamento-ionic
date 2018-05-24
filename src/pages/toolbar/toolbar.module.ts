import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolbarPage, PopoverManager } from './toolbar';

@NgModule({
  declarations: [
    ToolbarPage
  ],
  imports: [
    IonicPageModule.forChild(ToolbarPage),
  ],
  providers: [
    PopoverManager
  ]
})
export class ToolbarPageModule {}
