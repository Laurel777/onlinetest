import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from'@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 msg1:any;
 result:any;
  constructor(
    private Builder:FormBuilder,
    private service:LoginService,
    private router :Router
  ) { }

  ngOnInit(): void {
  }

  loginForm= this.Builder.group({
        uname:this.Builder.control('',Validators.required),
    password:this.Builder.control('',Validators.required),

  });

  proceedLogin()
  {
    if(this.loginForm.valid)
      {
this.service.getUserById(this.loginForm.value.uname).subscribe(data=>{
    this.result=data;
      if(this.result.password==this.loginForm.value.password)
      {
      this.router.navigate(['welcome']);
      }else{
      this.msg1="Please check username and password";
      }
     
    
},
error=>
{console.log(error);
this.msg1="No such username present";
})
}
      else{
        this.msg1="Please fill username and password";
             }
  }



}
