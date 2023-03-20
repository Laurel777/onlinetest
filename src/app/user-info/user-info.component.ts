import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component'; 
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
