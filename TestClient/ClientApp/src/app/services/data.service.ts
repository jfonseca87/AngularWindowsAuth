import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public getValues(): Observable<string> {
    console.log('calling data service');
    return this.http.get(`${environment.serviceBaseURL}Test`)
      .pipe(
        map((res: string) => {
          return res;
        })
      )
  }

  public saveValue(data: any): Observable<string> {
    console.log('saving value');
    return this.http.post(`${environment.serviceBaseURL}Test`, data)
              .pipe(
                map((res: any) => {
                  return res;
                })
              )
  }

  public updateValue(data: any): Observable<string> {
    console.log('updating value');
    return this.http.put(`${environment.serviceBaseURL}Test`, data)
              .pipe(
                map((res: any) => {
                  return res
                })
              )
  }

  public deleteValue(id: number): Observable<string> {
    console.log('deleting value');
    return this.http.delete(`${environment.serviceBaseURL}Test/${id}`)
              .pipe(
                map((res: any) => {
                  return res
                })
              )
  }
}
