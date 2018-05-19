import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { ActionSheetPageModule } from '../pages/action-sheet/action-sheet.module';
import { AlertPageModule } from '../pages/alert/alert.module';
import { BadgePageModule } from './../pages/badge/badge.module';
import { ButtonPageModule } from './../pages/button/button.module';
import { CardPageModule } from './../pages/card/card.module';
import { CheckboxPageModule } from '../pages/checkbox/checkbox.module';
import { RangePageModule } from '../pages/range/range.module';
import { DateTimePageModule } from '../pages/date-time/date-time.module';
import { FabPageModule } from '../pages/fab/fab.module';
import { GridPageModule } from '../pages/grid/grid.module';
import { IconPageModule } from './../pages/icon/icon.module';
import { NavigationPageModule } from '../pages/navigation/navigation.module';
import { NavigationDetailPageModule } from '../pages/navigation-detail/navigation-detail.module';
import { InputPageModule } from '../pages/input/input.module';
import { ListPageModule } from '../pages/list/list.module';
import { TogglePageModule } from '../pages/toggle/toggle.module';
import { LoadingPageModule } from './../pages/loading/loading.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ActionSheetPageModule,
    AlertPageModule,
    BadgePageModule,
    ButtonPageModule,
    CardPageModule,
    CheckboxPageModule,
    RangePageModule,
    DateTimePageModule,
    FabPageModule,
    GridPageModule,
    IconPageModule,
    NavigationPageModule,
    NavigationDetailPageModule,
    InputPageModule,
    ListPageModule,
    TogglePageModule,
    LoadingPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
