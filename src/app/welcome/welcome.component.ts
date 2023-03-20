import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from'@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  constructor(
    private Builder:FormBuilder,
    private service:LoginService,
   
    private router :Router
  ) { }
 msg2:any;
 finalmarks:any;
 marks:number=0;
 result:any;
  ngOnInit(): void {
  }
  Testform= this.Builder.group({
    ans1:this.Builder.control('',Validators.required),
    ans2:this.Builder.control('',Validators.required),
    ans3:this.Builder.control('',Validators.required),
    ans4:this.Builder.control('',Validators.required),
    ans5:this.Builder.control('',Validators.required),
    ans6:this.Builder.control('',Validators.required),
    ans7:this.Builder.control('',Validators.required),
    ans8:this.Builder.control('',Validators.required),
    ans9:this.Builder.control('',Validators.required),
    ans10:this.Builder.control('',Validators.required),
    
   

  });

  proceedTest()
  {
    if(this.Testform.valid)
    {  console.log(this.Testform.value.ans4);
      if(this.Testform.valid)
      {
this.service.getUserById("MockTest").subscribe(data=>{
    this.result=data;
        
      if(this.result.ansa==this.Testform.value.ans1)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.ansb==this.Testform.value.ans2)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.ansc==this.Testform.value.ans3)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.ansd==this.Testform.value.ans4)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.anse==this.Testform.value.ans5)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.ansf==this.Testform.value.ans6)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.ansg==this.Testform.value.ans7)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.ansh==this.Testform.value.ans8)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.ansi==this.Testform.value.ans9)
      {
       this.marks=this.marks+1;
      }else
      {
      } 

      if(this.result.ansj==this.Testform.value.ans10)
      {
       this.marks=this.marks+1;
      }else
      {
      } 
      alert("Your total marks is "+this.marks); 
      this.finalmarks=this.marks;
})         
          
     
      this.router.navigate(['user']);
    }}
    else{
this.msg2="Please fill in the answers and then only click on submit";
    }
  

}
}
