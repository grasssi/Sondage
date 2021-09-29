import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient: HttpClient) { }
  addUser(body: any) {
    return this.httpClient.post(`http://localhost:3000/api/v1/adduser`, body)
  }
}
