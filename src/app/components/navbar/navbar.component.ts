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
  isOpen: Boolean;  
  isUser: Boolean;                    /// it's false by default

  ngOnInit() {
    this.authFire.user.subscribe((user)=>{
      if(user) this.isUser = true;
      if(user) this.authFire.userUID = user.uid;
      else this.isUser = false;
    })
  }

  toggleShow(){
    this.isOpen = !this.isOpen;
  }
  logout(){
    this.authFire.logout()
    .then(()=>this.router.navigate(['/login']))
  }

}
