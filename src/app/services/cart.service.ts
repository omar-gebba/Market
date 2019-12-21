import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { Goods } from '../interfaces/goods';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fireStore: AngularFirestore, private authSer: AuthService) { }

  addToCart(data: Goods){
    return this.fireStore.collection('users/'+ this.authSer.userUID + '/cart').add(data);
  }

  cartItems(){
    return this.fireStore.collection('users/'+ this.authSer.userUID + '/cart').snapshotChanges()
  }
  editCart(){
    return this.fireStore.collection('users/'+ this.authSer.userUID + '/cart')
  }
}
