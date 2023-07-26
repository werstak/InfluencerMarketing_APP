import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import * as config from '../../../src/app-config';

@Injectable({
  providedIn: 'root'
})


export class UsersService {

  constructor(
    private http: HttpClient,
  ) {
  }


  // https://imai.co/api/dict/users/?q=dev&limit=10&type=search&platform=instagram

  // q: 'dav',
  // limit: 10,
  // type: 'search',
  // platform: 'instagram',


  getAllUsers(q: any, limit: number, type: string, platform: string): Observable<any> {
    // const {q, limit, type, platform} = data;
    return this.http.get(config.API_URL + `/dict/users/`, {
      params: new HttpParams({
        fromObject: {
          q,
          limit,
          type,
          platform
        }
      })
    })
      .pipe(
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  // https://imai.co/api/raw/ig/user/feed/?url=302489682

  getFeedUser(url: number): Observable<any> {
    return this.http.get(config.API_URL + `/raw/ig/user/feed/`, {
      params: new HttpParams({
        fromObject: {
          url
        }
      })
    })
      .pipe(
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }

  getContactsUser(url: number): Observable<any> {
    return this.http.get(config.API_URL + `/exports/contacts/`, {
      params: new HttpParams({
        fromObject: {
          url
        }
      })
    })
      .pipe(
        catchError(error => {
          console.log('Error: ', error.message);
          return throwError(error);
        })
      );
  }


  // getAllUsers(): Observable<any> {
  //   return this.http.get(config.API_URL + `/dict/users/`)
  //     .pipe(
  //       catchError(error => {
  //         console.log('Error: ', error.message);
  //         return throwError(error);
  //       })
  //     );
  // }


}
