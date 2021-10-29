import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';

export interface InfoData {

  type: string,
  Marque: string,
  service: string,
  SerialNumber: string,
  owner: string,
  ram: string,
  systeme: string,
  domaine: string,
  application: string,
  situation: string
}
export interface TableData extends Array<InfoData> { }

@Injectable({
  providedIn: 'root'
})

export class InformatiqueService {
  baseUrl = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  allmatInfos() {
    return this.httpClient.get<TableData>(`${this.baseUrl}/allminfos`).pipe(
      retry(3), // retry a failed request up to 3 times
      catchError(this.handleError)
    )
  }
  addmatInfo(body: any) {
    return this.httpClient.post(`${this.baseUrl}/addminfo/`, body)
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

  removeminfo(id: any) {
    return this.httpClient.delete(`${this.baseUrl}/removeminfo/${id}`)
  }
  getApplication(id: any) {
    return this.httpClient.get(`${this.baseUrl}/getapplication/${id}`)
  }

  updateApplication(id: any, body: any) {
    return this.httpClient.put(`${this.baseUrl}/updateapplication/${id}`, body)

  }
}

