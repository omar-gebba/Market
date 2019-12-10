import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoodsService } from 'src/app/services/goods.service';
import { Goods } from 'src/app/interfaces/goods';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private goodsSer: GoodsService) { }
  
  goods: Goods[] = [];
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


  addToCart(id){
    console.log(id)
  }

  ngOnDestroy() {
    this.goodsObservable.unsubscribe(),   ///// to unsubscribe home comp.
    console.log('homeComponent destroyed')
  }

}
