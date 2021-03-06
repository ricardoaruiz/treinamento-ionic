import { CepPageModule } from './../pages/cep/cep.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

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
import { ToastPageModule } from '../pages/toast/toast.module';
import { ToolbarPageModule } from '../pages/toolbar/toolbar.module';
import { PopoverContent } from '../pages/toolbar/toolbar';
import { SegmentPageModule } from '../pages/segment/segment.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { SelectPageModule } from '../pages/select/select.module';
import { ModalPageModule } from '../pages/modal/modal.module';
import { SlidePageModule } from '../pages/slide/slide.module';
import { PopoverPageModule } from '../pages/popover/popover.module';
import { CepProvider } from '../providers/cep/cep-provider';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PopoverContent
  ],
  imports: [
    HttpClientModule,
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
    ToastPageModule,
    ToolbarPageModule,
    SegmentPageModule,
    TabsPageModule,
    SelectPageModule,
    ModalPageModule,
    SlidePageModule,
    PopoverPageModule,
    CepPageModule,
    IonicModule.forRoot(MyApp, /* {mode:'ios'} */),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    PopoverContent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CepProvider
  ]
})
export class AppModule {}
