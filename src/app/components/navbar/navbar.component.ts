import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isOpen: Boolean;                      /// it's false by default

  ngOnInit() {
  }

  toggleShow(){
    this.isOpen = !this.isOpen;
  }

}
