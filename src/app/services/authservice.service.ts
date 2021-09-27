import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private httpClient: HttpClient) { }



  login(body: any) {
    return this.httpClient.post(`http://localhost:3000/api/v1/login`, body)
  }
  Forgot(body: any) {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    const email = { email: body }
    return this.httpClient.put(`http://localhost:3000/api/v1/forgotpassword`, email, { headers })
  }
  changePwd(body: any) {
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
    //const password={newPass:body,resetlink:resetlink}
    return this.httpClient.put(`http://localhost:3000/api/v1/resetpassword`, body, { headers })
  }
}
