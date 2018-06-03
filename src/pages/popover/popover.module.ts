import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PopoverPage } from './popover';
import { PopoverContentPage } from './popover-content/popover-content';

@NgModule({
  declarations: [
    PopoverPage,
    PopoverContentPage,
  ],
  entryComponents: [
    PopoverContentPage
  ],
  imports: [
    IonicPageModule.forChild(PopoverPage),
  ],
})
export class PopoverPageModule {}
