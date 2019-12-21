import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/interfaces/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cart: CartService) { }

  cartItems: Cart[] = [];
  desc: string;

  ngOnInit() {
    this.cart.cartItems().subscribe((cart)=>{
      this.cartItems = cart.map((data)=>{
        return {
          id: data.payload.doc.id,
        ...data.payload.doc.data()
        }
      })
    }) 

  }

  

}
