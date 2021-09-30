import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  isauth: boolean;
  constructor(private httpClient: HttpClient) { }


  public isAuthenticated(token: any): boolean {

    if (token) {

      this.isauth = true
    } else {
      this.isauth = false
    }
    return this.isauth
  }
  login(body: any) {
    return this.httpClient.post(`http://localhost:3000/api/v1/login`, body)
  }
  Forgot(body: any) {
    const email = { email: body }
    return this.httpClient.post(`http://localhost:3000/api/v1/forgotpassword`, email)
  }
  changePwd(body: any) {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    //const password={newPass:body,resetlink:resetlink}
    return this.httpClient.put(`http://localhost:3000/api/v1/resetpassword`, body)
  }
  register(body: any) {
    return this.httpClient.post(`http://localhost:3000/api/v1/register`, body)
  }
}
