import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserService } from '../services/user';
import { AuthService } from '../services/auth';
import { MoviesPage } from '../pages/movies/movies';
import { NewsPage } from '../pages/news/news';
import { LivePage } from '../pages/live/live';
import { SocialPage } from '../pages/social/social';

export const firebaseConfig = {
  apiKey: "AIzaSyCKWrlREeNLEoBvjbcyY_1jnRlTK6sdE88",
  authDomain: "tvquetzachapin-4be15.firebaseapp.com",
  databaseURL: "https://tvquetzachapin-4be15.firebaseio.com",
  projectId: "tvquetzachapin-4be15",
  storageBucket: "tvquetzachapin-4be15.appspot.com",
  messagingSenderId: "369882323547"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InicioPage,
    LoginPage,
    RegisterPage,
    MoviesPage,
    NewsPage,
    LivePage,
    SocialPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InicioPage,
    LoginPage,
    RegisterPage,
    MoviesPage,
    NewsPage,
    LivePage,
    SocialPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserService,
    AuthService
  ]
})
export class AppModule {}
