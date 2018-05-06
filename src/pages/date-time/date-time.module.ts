import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DateTimePage } from './date-time';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    DateTimePage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(DateTimePage),
  ],
})
export class DateTimePageModule {}
