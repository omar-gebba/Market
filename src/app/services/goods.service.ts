import { Injectable } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {


  constructor(private fireStore: AngularFirestore, private fireStorage: AngularFireStorage) { }
  
  getAllGoods(){
    return this.fireStore.collection('goods')
  }
  addNewGood(name: string, price: number, image: File, desc: string){
    let ref = this.fireStorage.ref('goods/' + image.name);
    ref.put(image).then(()=>{
      ref.getDownloadURL().subscribe(imgURL=>{
        this.fireStore.collection('goods').add({
          name,
          price,
          desc,
          imgURL
        })
      })
    })
  }
}
