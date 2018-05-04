import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from './../pages/alert/alert';
import { BadgePage } from './../pages/badge/badge';
import { ButtonPage } from './../pages/button/button';
import { CardPage } from './../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { RangePage } from '../pages/range/range';
import { DateTimePage } from '../pages/date-time/date-time';
import { ComponentsModule } from './../components/components.module';
import { FabPage } from '../pages/fab/fab';
import { GridPage } from '../pages/grid/grid';
import { IconPage } from './../pages/icon/icon';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    RangePage,
    DateTimePage,
    FabPage,
    GridPage,
    IconPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ActionSheetPage,
    AlertPage,
    BadgePage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    RangePage,
    DateTimePage,
    FabPage,
    GridPage,
    IconPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
