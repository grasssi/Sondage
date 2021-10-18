import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }
  allServices() {
    return this.httpClient.get(`${this.baseUrl}/allServices/`)
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
  removeservice(id: any) {
    return this.httpClient.delete(`${this.baseUrl}/removeservice/${id}`)
  }

  getservice(id: any) {
    return this.httpClient.get(`${this.baseUrl}/getservice/${id}`)
  }

  updateservice(id: any, body: any) {
    return this.httpClient.put(`${this.baseUrl}/updateservice/${id}`, body)
  }
  affectService(id:any,body: any) {
    return this.httpClient.put(`${this.baseUrl}/affectService/${id}`, body)
  }

  addservice(body:any){
    return this.httpClient.post(`${this.baseUrl}/addservice/`, body)
  }
}
