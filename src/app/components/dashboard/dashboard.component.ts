import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Goods } from 'src/app/interfaces/goods';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild('image', {static: true}) image:ElementRef;

  constructor(private goodService: GoodsService) { }

  ngOnInit() {
  }

  addNewGood(form: NgForm){
    let name  = (<Goods>form.value).name,
        price = (<Goods>form.value).price,
        image = (<HTMLInputElement>this.image.nativeElement).files[0],
        desc  = (<HTMLInputElement>this.image.nativeElement).files[0].name;
        
    this.goodService.addNewGood(name, price, image, desc);
  }

}
