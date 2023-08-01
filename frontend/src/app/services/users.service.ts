import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import * as config from '../../../src/app-config';

@Injectable({
  providedIn: 'root'
})


export class UsersService {
  constructor(
    private http: HttpClient,
  ) {
  }

  public postsSelectedUser$ = new BehaviorSubject<any[]>([]);
  public selectedUser$ = new BehaviorSubject<any>({});
  public contactUser$ = new BehaviorSubject<any>({});
  public imageLoading$ = new BehaviorSubject<boolean>(false);



  getAllUsers(q: any, limit: number, type: string, platform: string): Observable<any> {
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


}
