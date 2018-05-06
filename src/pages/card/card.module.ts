import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardPage } from './card';
import { ComponentsModule } from './../../components/components.module';

@NgModule({
  declarations: [
    CardPage
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(CardPage),
  ],
})
export class CardPageModule {}
