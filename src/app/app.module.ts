import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

//  to deal with firebase database
import { AngularFireModule } from "@angular/fire";   // to intialize firebase
import { AngularFirestoreModule } from "@angular/fire/firestore";   // to get data from storage

////////////////////////////////////////////////////////////

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { GoodsComponent } from './components/goods/goods.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TruncatePipe } from './pipes/truncate.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    AccountComponent,
    OrdersComponent,
    GoodsComponent,
    NotFoundComponent,
    NavbarComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({      /////to intilize project with firebase
                                      apiKey: "AIzaSyBOC0C_z7-Tf35wqhNPLnkHyVZbrZTvnUQ",
                                      authDomain: "market-1a320.firebaseapp.com",
                                      databaseURL: "https://market-1a320.firebaseio.com",
                                      projectId: "market-1a320",
                                      storageBucket: "market-1a320.appspot.com",
                                      messagingSenderId: "980373676049",
                                      appId: "1:980373676049:web:e5337514ef01b7db6ed1b0",
                                      measurementId: "G-MYS5NZRQWF"
                                    }),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
