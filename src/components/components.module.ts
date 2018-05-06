import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { CustomDateTimeComponent } from './custom-date-time/custom-date-time';
import { CustomCardComponent } from './custom-card/custom-card';

@NgModule({
	declarations: [
    CustomDateTimeComponent,
    CustomCardComponent
  ],
	imports: [
    IonicModule
  ],
	exports: [
    CustomDateTimeComponent,
    CustomCardComponent
  ]
})
export class ComponentsModule {}
