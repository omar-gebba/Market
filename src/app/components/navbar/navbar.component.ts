import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authFire: AuthService, private router: Router) { }
  isOpen: Boolean;                      /// it's false by default

  ngOnInit() {
  }

  toggleShow(){
    this.isOpen = !this.isOpen;
  }
  logout(){
    this.authFire.logout()
    .then(()=>this.router.navigate['/login'])
  }

}
