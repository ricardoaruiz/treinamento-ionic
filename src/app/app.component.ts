import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from './../pages/alert/alert';
import { BadgePage } from './../pages/badge/badge';
import { ButtonPage } from './../pages/button/button';
import { CardPage } from '../pages/card/card';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { RangePage } from '../pages/range/range';
import { DateTimePage } from '../pages/date-time/date-time';
import { FabPage } from '../pages/fab/fab';
import { GridPage } from '../pages/grid/grid';
import { IconPage } from '../pages/icon/icon';
import { NavigationPage } from '../pages/navigation/navigation';
import { InputPage } from '../pages/input/input';
import { TogglePage } from '../pages/toggle/toggle';
import { LoadingPage } from '../pages/loading/loading';
import { ToastPage } from '../pages/toast/toast';
import { ToolbarPage } from '../pages/toolbar/toolbar';
import { SegmentPage } from '../pages/segment/segment';
import { TabsPage } from '../pages/tabs/tabs';
import { SelectPage } from '../pages/select/select';
import { ModalPage } from '../pages/modal/modal';
import { SlidePage } from '../pages/slide/slide';
import { PopoverPage } from '../pages/popover/popover';
import { CepPage } from '../pages/cep/cep';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = CepPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'ActionSheet', component: ActionSheetPage},
      { title: 'Alert', component: AlertPage},
      { title: 'Badge', component: BadgePage},
      { title: 'Button', component: ButtonPage},
      { title: 'Card', component: CardPage},
      { title: 'Checkbox', component: CheckboxPage},
      { title: 'Range', component: RangePage},
      { title: 'DateTime', component: DateTimePage},
      { title: 'Fab', component: FabPage},
      { title: 'Grid', component: GridPage},
      { title: 'Icon', component: IconPage},
      { title: 'Navigation', component: NavigationPage},
      { title: 'Input', component: InputPage},
      { title: 'List', component: ListPage },
      { title: 'Toggle', component: TogglePage },
      { title: 'Loading', component: LoadingPage },
      { title: 'Toast', component: ToastPage },
      { title: 'Toolbar', component: ToolbarPage },
      { title: 'Segment', component: SegmentPage },
      { title: 'Tabs', component: TabsPage },
      { title: 'Select', component: SelectPage },
      { title: 'Modal', component: ModalPage },
      { title: 'Slide', component: SlidePage },
      { title: 'Popover', component: PopoverPage },
      { title: 'Consulta CEP', component: CepPage }
    ];
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
