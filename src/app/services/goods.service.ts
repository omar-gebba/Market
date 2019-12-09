import { Injectable } from '@angular/core';
import { Goods } from '../interfaces/goods';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {


  constructor() { }
  
  goods: Array<Goods> = [
    {name: 'razer-blade-hero-v3',
     price: 10,
      desc: 'This is a wider card with supporting text below as a natural. This content is a little bit longer',
      imgURL: 'assets/razer-blade-hero-laptop-v3.png',
    },

    {name: 'Lenovo',
     price: 10,
      desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL: 'assets/lenovo.jpeg',
    },

    {name: 'DELL',
     price: 10,
      desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL: 'assets/dell.jpeg',
    },
    
    {name: 'HP',
     price: 10,
      desc: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer',
      imgURL: 'assets/hp.jpeg',
    },
  ]
}
