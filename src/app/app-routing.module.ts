import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'welcome' , component:WelcomeComponent},
  {path:'login' , component:LoginComponent},
  {path:'user' , component:UserInfoComponent},
  {path:'register' , component:RegisterComponent},
  {path:'logout' , component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
