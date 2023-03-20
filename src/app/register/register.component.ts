import { Component, OnInit } from '@angular/core';

import {FormBuilder, Validators} from'@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
msg:any;
  constructor(
    private Builder:FormBuilder,
    private service:LoginService,
    private router :Router
  ) { }

  ngOnInit(): void {
  }
  registerForm= this.Builder.group({
    id:this.Builder.control('',Validators.required),
    uname:this.Builder.control('',Validators.required),
    password:this.Builder.control('',Validators.required),

  });

  proceedRegister()
  {
    if(this.registerForm.valid)
      {
this.service.CreatenewUser(this.registerForm.value).subscribe(data=>{
alert("User Registered");
this.router.navigate(['login']);
})
      }
      else{
        this.msg="invalid form";
       
      }
  }




}
