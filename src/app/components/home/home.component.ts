import { Component, OnInit } from '@angular/core';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private goodsSer: GoodsService) { }
  goods;
  ngOnInit() {
    this.goods = this.goodsSer.goods;
  }
  addToCart(i){
    console.log(this.goods[i]);
  }

}
