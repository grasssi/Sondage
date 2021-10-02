import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient) { }
  login(body: any) {
    return this.httpClient.post(`${this.baseUrl}/login`, body)
  }
  register(body: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, body)
  }
  Forgot(body: any) {
       return this.httpClient.post(`${this.baseUrl}/forgotpassword`, body)
  }
  changePwd(body: any) {
    return this.httpClient.put(`${this.baseUrl}/resetpassword`, body)
  }
}
