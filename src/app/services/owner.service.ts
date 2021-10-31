import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export interface OwnerData {
  firstName: string;
  lastName: string;
  email: string;
  service: string
}
export interface TableData extends Array<OwnerData> { }

@Injectable({
  providedIn: 'root'
})

export class OwnerService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  allowners() {
    return this.httpClient.get<TableData>(`${this.baseUrl}/allowners`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    )
  }
  //get all owners without service
  allownersWs() {
    return this.httpClient.get<TableData>(`${this.baseUrl}/allownersws`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    )
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
  removeowner(id: any) {
    return this.httpClient.delete(`${this.baseUrl}/removeowner/${id}`)
  }

  getowner(id: any) {
    return this.httpClient.get(`${this.baseUrl}/getowner/${id}`)
  }

  updateowner(id: any, body: any) {
    return this.httpClient.put(`${this.baseUrl}/updateowner/${id}`, body)

  }

  addowner(body: any) {
    return this.httpClient.post(`${this.baseUrl}/addowner`, body)
  }
  affectService(body: any) {
    return this.httpClient.put(`${this.baseUrl}/affectService/${body.service}/${body._id}`, body)
  }
}
