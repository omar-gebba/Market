import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authServ: AuthService, private router: Router) { }
  isOpen: Boolean;  
  isUser: Boolean;                    /// it's false by default

  ngOnInit() {
    this.authServ.user.subscribe((user)=>{
      if(user) {
        this.isUser = true;
        this.authServ.userUID = user.uid;    /// this for using this id in authService
        }
      else {
        this.isUser = false;
        this.authServ.userUID = '';
      }
    })
  }

  toggleShow(){
    this.isOpen = !this.isOpen;
  }
  logout(){
    this.authServ.logout()
    .then(()=>this.router.navigate(['/login']))
  }

}
