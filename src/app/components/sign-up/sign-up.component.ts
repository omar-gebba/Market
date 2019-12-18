import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserData } from 'src/app/interfaces/user-data';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private authServ: AuthService, private user: UserService, private router: Router) { }
  errorMessage: string = '';

  ngOnInit() {
    this.authServ.user.subscribe((user)=>{
      if (user) this.router.navigate(['/']);
    })
  }

  signUp(form){
    let data: UserData = form.value
    
    this.authServ.signUp(data.email, data.pass)
    .then(result => {
      this.errorMessage =  '';
      this.user.creatUser(result.user.uid, data.name, data.address)
      .then(()=>this.router.navigate(['/']))

    })
    .catch(err => { this.errorMessage = err.message })
  
  }

}
