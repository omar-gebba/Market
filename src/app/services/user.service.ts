import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fireStore: AngularFirestore) { }

  creatUser(id, name, address){

    return this.fireStore.doc("users/"+ id).set({
      name,
      address
    })
  }
}
