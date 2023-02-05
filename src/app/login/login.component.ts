import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginResult } from '../Models/Class';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
 email1
password1
loginResult?: LoginResult;
constructor(private auth:AuthService,private router:Router){}
submit(){
  
const obj={"email":this.email1,"password":this.password1};
console.log(obj)
this.auth.login(obj).subscribe(result=>{
  if(result.success){localStorage.setItem(this.auth.tokenKey,result.token);this.router.navigateByUrl('/')}




},error=>{console.log(error);
  if (error.status == 401) {
  this.loginResult = error.error;
  }});


}


}
