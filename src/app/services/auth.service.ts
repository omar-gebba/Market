import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  userUID: string = '';       ///// ====>>>> to get user id from nav component and use it in whole app

  constructor(private authFire: AngularFireAuth) {
    this.user = authFire.user;
   }

  signUp(email, Password){
    return this.authFire.auth.createUserWithEmailAndPassword(email, Password);
  }

  login(email, password){
    return this.authFire.auth.signInWithEmailAndPassword(email, password);
  }

  logout(){
    return this.authFire.auth.signOut();
  }
}
