import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient:HttpClient) { }
  allServices() {
    return this.httpClient.get(`${this.baseUrl}/allServices/`)
  }
}
