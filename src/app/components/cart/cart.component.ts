import { Component, OnInit, Input, OnChanges } from '@angular/core';
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
  totalPrice: number;

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

  deleteFromCart(index){
    this.cart.deleteItem(this.cartItems[index].id);
  }
  updateOrder(index){
    this.cart.updateItem(this.cartItems[index].id, this.cartItems[index].amount);
  }
}
