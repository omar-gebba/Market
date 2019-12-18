import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authSer: AuthService, private router: Router) { }

  errorMeasage: string = '';

  ngOnInit() {
  }
  login(form){
    let data = form.value;
    this.authSer.login(data.email, data.pass)
    .then(()=>{
      this.errorMeasage = '';
      this.router.navigate(['/'])
    })
    .catch(err=>this.errorMeasage = err)
  }

}
