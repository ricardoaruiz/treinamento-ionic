import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateTimePage } from './date-time';
import { CustomDateTimeComponent } from '../../components/custom-date-time/custom-date-time';

@NgModule({
  declarations: [
    DateTimePage,
    CustomDateTimeComponent
  ],
  imports: [
    IonicPageModule.forChild(DateTimePage),
  ],
})
export class DateTimePageModule {}
