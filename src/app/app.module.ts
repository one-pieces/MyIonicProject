import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { ActionSheetsPage } from '../pages/action-sheets/action-sheets';
import { AlertPage } from '../pages/alert/alert';
import { BadgesPage } from '../pages/badges/badges';
import { ButtonsPage } from '../pages/buttons/buttons';
import { CardsPage } from '../pages/cards/cards';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DateTimePage } from '../pages/date-time/date-time';
import { FabsPage } from '../pages/fabs/fabs';
import { GesturesPage } from '../pages/gestures/gestures';
import { GridPage } from '../pages/grid/grid';
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';
import { ListsPage } from '../pages/lists/lists';
import { LoadingPage } from '../pages/loading/loading';
import { ModalsPage, ModalContentPage } from '../pages/modals/modals';
import { NavigationPage, NavigationDetailsPage } from '../pages/navigation/navigation';
import { PopoverBasicPage, PopoverPage } from '../pages/popover/popover';
import { RadioPage } from '../pages/radio/radio';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetsPage,
    AlertPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    DateTimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    ListsPage,
    LoadingPage,
    ModalsPage,
    ModalContentPage,
    NavigationPage,
    NavigationDetailsPage,
    PopoverBasicPage,
    PopoverPage,
    RadioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    ActionSheetsPage,
    AlertPage,
    BadgesPage,
    ButtonsPage,
    CardsPage,
    CheckboxPage,
    DateTimePage,
    FabsPage,
    GesturesPage,
    GridPage,
    IconsPage,
    InputsPage,
    ListsPage,
    LoadingPage,
    ModalsPage,
    ModalContentPage,
    NavigationPage,
    NavigationDetailsPage,
    PopoverBasicPage,
    PopoverPage,
    RadioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
