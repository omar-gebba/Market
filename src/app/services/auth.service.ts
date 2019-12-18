import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private authFire: AngularFireAuth) { }

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
