import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

private apiUrl1="http://localhost:3000/userinfo";


CreatenewUser(userdata:any)
{
return this.http.post(this.apiUrl1, userdata);
}

viewAll()
{
  return this.http.get(this.apiUrl1);
}

getUserById(username:any)
{
  return this.http.get(this.apiUrl1+'/'+username);
}


}
