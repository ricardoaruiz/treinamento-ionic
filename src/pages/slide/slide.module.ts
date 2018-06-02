import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidePage } from './slide';
import { Slide01 } from './slides/slide01';
import { Slide02 } from './slides/slide02';
import { Slide03 } from './slides/slide03';
import { Slide04 } from './slides/slide04';

@NgModule({
  declarations: [
    SlidePage,
    Slide01,
    Slide02,
    Slide03,
    Slide04,
  ],
  entryComponents: [
    Slide01,
    Slide02,
    Slide03,
    Slide04
  ],
  imports: [
    IonicPageModule.forChild(SlidePage),
  ],
})
export class SlidePageModule {}
