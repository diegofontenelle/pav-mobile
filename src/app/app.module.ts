import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DoacaoEdit } from '../pages/doacao/edit/edit';
import { DoacaoCreate } from '../pages/doacao/create/create';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { DoacaoProvider } from '../providers/doacao.provider';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DoacaoEdit,
    DoacaoCreate
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DoacaoEdit,
    DoacaoCreate
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler, 
      useClass: IonicErrorHandler
    },
    DoacaoProvider
  ]
})
export class AppModule {}
