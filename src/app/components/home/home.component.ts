import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GoodsService } from 'src/app/services/goods.service';
import { Goods } from 'src/app/interfaces/goods';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private goodsSer: GoodsService, private cart: CartService) { }
  
  goods: Goods[] = [];
  add: number = -1;
goodsObservable: Subscription;   //// to unsubscribe home component 

  ngOnInit() {
    this.goodsObservable = this.goodsSer.getAllGoods().snapshotChanges().subscribe(data=>{
      this.goods = data.map(e=>{
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        }
      })
    })
  }


  buy(index){
    this.add = index;
  }
  addToCart(index, amount){
    if (amount.value <= 0 ) amount.value = 1;
    let selectedGood = this.goods[index];
    let data: Cart = {
      name: selectedGood.name,
      price: selectedGood.price,
      imgURL: selectedGood.imgURL,
      amount: +amount.value,
      desc: selectedGood.desc
    }
    this.cart.addToCart(data).then(()=>console.log(data))
  }

  ngOnDestroy() {
    this.goodsObservable.unsubscribe(),   ///// to unsubscribe home comp.
    console.log('homeComponent destroyed')
  }

}
