import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

import {Place} from './place';
import {Route} from './route';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CloudstarxService {

  private cloudstarxUrl = 'http://localhost:8080/rest';

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private log(message: string) {
    this.messageService.add(`CloudstarxService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any, obs: Observable<T>) => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  findAllPlaces(): Observable<Place[]> {
    const url = `${this.cloudstarxUrl}/findAllPlaces`;
    return this.http.get<Place[]>(url).pipe(
      tap(_ => this.log('Fetched all places.')),
      catchError(this.handleError('findAllPlaces', [])));
  }

  findAllRoutes(): Observable<Route[]> {
    const url = `${this.cloudstarxUrl}/findAllRoutes`;
    return this.http.get<Route[]>(url).pipe(
      tap(_ => this.log('Fetched all routes.')),
      catchError(this.handleError('findAllRoutes', [])));
  }

  getPlace(id: number): Observable<Place> {
    const url = `${this.cloudstarxUrl}/getPlace?id=${id}`;
    return this.http.get<Place>(url).pipe(
      tap(_ => this.log(`Fetched place id=${id}.`)),
      catchError(this.handleError('getPlace', [])));
  }

  getRoute(id: number): Observable<Route> {
    const url = `${this.cloudstarxUrl}/getRoute?id=${id}`;
    return this.http.get<Route>(url).pipe(
      tap(_ => this.log(`Fetched route id=${id}.`)),
      catchError(this.handleError('getRoute', [])));
  }

}
