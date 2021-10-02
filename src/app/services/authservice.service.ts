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
  register(body: any) {
    return this.httpClient.post(`http://localhost:3000/api/v1/register`, body)
  }
  Forgot(body: any) {
       return this.httpClient.post(`http://localhost:3000/api/v1/forgotpassword`, body)
  }
  changePwd(body: any) {
    return this.httpClient.put(`http://localhost:3000/api/v1/resetpassword`, body)
  }
}
